ServerEvents.recipes(event => {
    //青铜块和锭
    //event.remove({id:'immersive_aircraft:airship'})
    event.shaped(
        Item.of('kubejs:bronze_block', 1),
        [ 
        'AAA', 
        'AAA',
        'AAA'
        ],
        {
        A: '#forge:ingots/bronze'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_ingot', 9),
        [ 
        'A'
        ],
        {
        A: '#forge:storage_blocks/bronze'
        }
    )

    //青铜粒和锭
    event.shaped(
        Item.of('kubejs:bronze_ingot', 1),
        [ 
        'AAA', 
        'AAA',
        'AAA'
        ],
        {
        A: '#forge:nuggets/bronze'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_nugget', 9),
        [ 
        'A'
        ],
        {
        A: '#forge:ingots/bronze'
        }
    )

    //青铜粉和锭
    event.blasting('#forge:ingots/bronze', '#forge:dusts/bronze')

    //青铜压板
    event.recipes.create.pressing('#forge:plates/bronze', '#forge:ingots/bronze')

    //青铜工具，护甲
    event.shaped(
        Item.of('kubejs:bronze_pickaxe', 1),
        [ 
        'AAA',
        ' B ',
        ' B '
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_axe', 1),
        [ 
        'AA',
        'AB',
        ' B'
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_axe', 1),
        [ 
        'AA',
        'BA',
        'B '
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_sword', 1),
        [ 
        'A',
        'A',
        'B'
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_shovel', 1),
        [ 
        'A',
        'B',
        'B'
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_hoe', 1),
        [ 
        'AA',
        'B ',
        'B '
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_hoe', 1),
        [ 
        'AA',
        ' B',
        ' B'
        ],
        {
        A: '#forge:ingots/bronze',
        B: '#forge:rods/wooden'
        }
    )
    /*
    event.shaped(
        Item.of('kubejs:bronze_helmet', 1),
        [ 
        'AAA',
        'A A'
        ],
        {
        A: '#forge:plates/bronze'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_chestplate', 1),
        [ 
        'A A',
        'AAA',
        'AAA'
        ],
        {
        A: '#forge:plates/bronze'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_leggings', 1),
        [ 
        'AAA',
        'A A',
        'A A'
        ],
        {
        A: '#forge:plates/bronze'
        }
    )
    event.shaped(
        Item.of('kubejs:bronze_boots', 1),
        [ 
        'A A',
        'A A'
        ],
        {
        A: '#forge:plates/bronze'
        }
    )
    */

    //用铜粉、锡粉合成青铜粉
    event.recipes.create.mixing('kubejs:bronze_dust', ['#forge:dusts/tin','#forge:dusts/copper','#forge:dusts/copper','#forge:dusts/copper'])

    //石磨粉碎铜锭锡锭镍锭锌锭
    event.recipes.create.milling(Item.of('kubejs:tin_dust').withChance(0.5), '#forge:ingots/tin')
    event.recipes.create.milling(Item.of('immersiveengineering:dust_copper').withChance(0.5), '#forge:ingots/copper')
    event.recipes.create.milling(Item.of('immersiveengineering:dust_nickel').withChance(0.5), '#forge:ingots/nickel')
    event.recipes.create.milling(Item.of('kubejs:zinc_dust').withChance(0.5), '#forge:ingots/zinc')

    event.remove({id:/alloyed\.*/})
    event.recipes.create.mixing('kubejs:bronze_ingot', ['#forge:ingots/tin','#forge:ingots/copper','#forge:ingots/copper','#forge:ingots/copper']).heated()

    //康铜
    //移除合成康铜粉配方
    event.remove({id:"immersiveengineering:crafting/constantan_mix"})
    //新增加热搅拌配方
    event.recipes.create.mixing('2x #forge:dusts/constantan', ['#forge:dusts/nickel','#forge:dusts/copper']).heated()
    //补充辊压配方
    event.recipes.create.pressing('#forge:plates/constantan', '#forge:ingots/constantan')
    //康铜代替铜
    event.replaceInput(
        { input:"#forge:ingots/copper",mod:"immersiveengineering" },
        '#forge:ingots/copper',
        '#forge:ingots/constantan'
    )
    event.replaceInput(
        { output:"create:fluid_pipe" },
        '#forge:ingots/copper',
        '#forge:ingots/constantan'
    )
    event.replaceInput(
        { output:"create:fluid_pipe" },
        '#forge:plates/copper',
        '#forge:plates/constantan'
    )
    event.replaceInput(
        { output:"create:fluid_tank" },
        '#forge:plates/copper',
        '#forge:plates/constantan'
    )

    //黄铜
    event.remove({id:"create:mixing/brass_ingot"})
    let inter = 'kubejs:incomplete_brass_ingot'
    event.recipes.create.sequenced_assembly([
        Item.of('create:brass_ingot').withChance(60.0),
        Item.of('create:zinc_ingot').withChance(20.0),
        Item.of('copper_ingot').withChance(20.0)
    ], 'minecraft:copper_ingot', [
        event.recipes.createFilling(inter, [inter, Fluid.lava(500)]),
        event.recipes.createDeploying(inter, [inter, 'kubejs:zinc_dust']),
        event.recipes.createFilling(inter, [inter, Fluid.water(500)]),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)
})