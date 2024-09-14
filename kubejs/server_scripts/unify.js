ServerEvents.recipes(event => {
  //我真是sb
  event.shapeless(Item.of('tfmg:coal_coke_dust',1),
        [
            '#forge:dusts/coal_coke'
        ]
  )
  //我不到啊
  event.shapeless(Item.of('tfmg:aluminum_ingot',1),
        [
            '#forge:ingots/aluminum'
        ]
  )
  event.shapeless(Item.of('create:copper_nugget',1),
        [
            '#forge:nuggets/copper'
        ]
  )

  //铁矿混合粉也可以用铁粉做
  event.recipes.create.mixing('3x tfmg:blasting_mixture', ['#forge:dusts/iron','#forge:dusts/iron','#forge:dusts/iron','tfmg:limesand'])

  //石灰砂可以用方解石磨
  event.recipes.create.milling(Item.of('tfmg:limesand').withChance(0.5), 'calcite')

  //我寻思工业大麻也能做绳子
  event.shaped('3x farmersdelight:rope', [ 
    'AA', 
    'AA',
    'AA'  
  ], {
    A: 'immersiveengineering:hemp_fiber'
  })

  //齿轮方块就该是齿轮！
  event.remove({ id: 'supplementaries:cog_block' })
  event.shaped('12x supplementaries:cog_block', [ 
    'AAA', 
    'ABA',
    'AAA'  
  ], {
    A: 'create:cogwheel',
    B: '#forge:storage_blocks/redstone'
  })

  //干岩盐怎么就不能磨出盐了
  event.recipes.create.crushing(Item.of('salt:raw_rock_salt').withChance(0.25), 'biomesoplenty:dried_salt')

  //硫磺石就不是硫磺了吗？
  event.recipes.create.crushing(Item.of('tfmg:sulfur_dust').withChance(0.1), 'biomesoplenty:brimstone')

  //由于移除了沉浸工程锯木机，补充锯末的获取配方
  event.recipes.create.cutting(Item.of('immersiveengineering:dust_wood').withChance(0.5), 'stick')

  //锯末面包……
  event.shaped('2x bread', [ 
    'BAB', 
    'ABA' 
  ], {
    A: 'immersiveengineering:dust_wood',
    B: 'wheat'
  })

  //大哥我问你话呢？铝脚手架为啥是钢做的啊？？？
  event.replaceInput(
    {output:'tfmg:aluminum_scaffolding'},
    '#forge:ingots/steel',
    '#forge:ingots/aluminum'
  )

  //工作台的通用性适配
  event.replaceInput(
    {input:'minecraft:crafting_table'},
    'minecraft:crafting_table',
    '#forge:workbench'
  )

  //任意末影珍珠合成原版末影珍珠
  event.shapeless(Item.of('minecraft:ender_pearl',1),
        [
            '#forge:ender_pearls'
        ]
  )

  //补充：暗影精华桶和光辉混合物桶均可以通过分液返还流体
  event.recipes.create.emptying([Fluid.of("createchromaticreturn:flowing_refined_mixture",1000), 'bucket'], 'createchromaticreturn:refined_mixture_bucket')
  event.recipes.create.emptying([Fluid.of("createchromaticreturn:flowing_shadow_essence",1000), 'bucket'], 'createchromaticreturn:shadow_essence_bucket')

  //下面是一些重复配方的移除
  event.replaceInput(
    {id:'bucketlib:farmersdelight/wheat_dough_from_water'},
    'minecraft:wheat',
    '#forge:flour'
  )
  event.remove({ id: 'beautify:rope' })
  event.remove({ id: 'tfmg:crushing/saltpeter' })
  event.remove({ id: 'tfmg:mixing/gun_powder' })
  event.remove({ id:"tfmg:filling/liquid_asphalt_bucket" })
  event.remove({ id:"everycomp:c/botania/livingwood_slab_from_livingwood_planks_stonecutting" })
  event.remove({ id:"everycomp:c/botania/livingwood_stairs_from_livingwood_planks_stonecutting" })

})