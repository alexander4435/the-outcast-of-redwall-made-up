function quest3 () {
    adventure.addImageToTextLog(img`
        .........................fffffff...
        ................ffffffbbffddddddff.
        ...............ffdddbbffddddffdddf.
        .............ffdddbbbffddddffddddf.
        ............ffdddbbffdddddfdddddef.
        ..........ffdddbbbffddddffdddffeff.
        .........ffdddbbffdddddfddddfeeff..
        ........fdddbbffdddddfffddfeeef....
        ......ffdddbffdddddfdfdddfeeff.....
        .....ffdddbfbbffddfdfddfeefff......
        ....fddddbfbfffffddddffeeff........
        ...fdddddfbbfbcfcfddfdefff.........
        .ffddddbbfbbfccfcfddeefff..........
        ffddccbbbfbbfffccfeeeff............
        fffcffccbfbbbbbccfeeff.............
        .fcccffcccffccccffef...............
        ..fff...fffffffffff................
        ...................................
        ...................................
        `)
    adventure.addToTextlog("you have pitched camp and you are siting around the campfire when your friend tells a story of where they came from and how they got here and then they speak of a dark and powerful fox lord that ruled on a island that had a lake that had a gigantic sea monster that could swallow a log boat in one go but you dicide to askthem...")
    adventure.addToTextlog("press (B) to ask more about the lake and the monster")
    adventure.addToTextlog("press (A) to ask to not talk about it")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.B.isPressed()) {
        adventure.addToTextlog("tell me more about all of this")
        ask_more()
    } else {
        adventure.addToTextlog("I don't want you to talk about this")
        adventure.addToTextlog("the mole says why not?")
        not_to_talk_about_it()
    }
}
function not_to_talk_about_it () {
	
}
function quest2 () {
    adventure.addImageToTextLog(img`
        ...eddd5.4......................................................
        ..edd5de4..4....................................................
        .edd5e.de14.....................................................
        .ed5e.e.de5.....................................................
        .e5e.e.e.d4.....................................................
        .ed1e.e.e.4.....................................................
        .eed1e.e.ed5....................................................
        .4eed1e.eded5...................................................
        4..eee1ededed5..................................................
        ..4.eeedededed1.................................................
        .4....eededede51................................................
        .......eedede4ed1...............................................
        ........eede4ede51..............................................
        .........eedede4ed1.............................................
        ..........eede4ede51............................................
        ...........eedede4ed1...........................................
        ............eede4ede51..........................................
        .............eedede4ed1.........................................
        ..............eede4eded1........................................
        ...............eedededed1.......................................
        ................eedededed5......................................
        .................eedededed5.....................................
        ..................eedededed5....................................
        ...................eedededed544444444455555.....................
        ....................eededededdddddddddddddd51...................
        .....................eededededdddddddddddddd441.................
        ......................eededededddddddddddddddd44................
        .......................eededededdddddd5ddddddddd4...............
        .......................eeddedededdddddddd5ddddddd4..............
        .......................eedddedededeeeeddddddddddd4..............
        .......................eeddddedede4444eddddddddddd4.............
        .......................eedddddede4eccc4edd5ddddddd4.............
        .......................eedddddde4ececcc4edddddddddd4............
        .......................eeddddde4ecececc4edddddddddd5............
        .......................eeddddde4cececec4edddddddddd5............
        .......................eeddddde4ccecece4eddddddd4dd5eeee........
        .......................eeddd5dee4ccececeddddddd5ddd4ddde5e......
        .......................eeddddddde4ccecededddddddddddddddd55.....
        .......................eedddddddde444edededdd4dddddddddddd55....
        .......................eeddddddddeeeedededed5dddddddddddddd55...
        .......................eeddd5ddddddddddedededddddddddddddddde5..
        .......................eeedddddd5dddddddedededddddddddddddddde5.
        ........................eedddddddddddddddedededddddddddddddddd55
        ........................eeeddddddddddddd4dedededdddddddddddddde5
        .........................eeddddddddddddddddedededdddddddddddddd4
        .........................eeedddddddddd5dddddedededddddddddddddd4
        ..........................eeeddddddddddddddddedededdddddddddddd4
        ...........................eeeeddddd4dddddddddededefddddddddddd4
        ............................eeeeeddddddddddddddedefeddddddddddd4
        ..............................eeeeddddddddddddddefedddddddddddde
        ................................eeddddddddddddddfeddddddddddddee
        .................................eeddddddddddddddddddddddddddee.
        .................................eedddddddddddddddddddddddddeee.
        .................................eeddddddddddddddddddddddddeee..
        .................................eeeddddddddddddddddddddddeee...
        ..................................eedddddddddddddddddddddeee....
        ..................................eeedddddddddddddddddddeee.....
        ...................................eeddddddddddddddddddeee......
        ...................................eeeddddddddddddddddeee.......
        ....................................eeeddddddddddddddeee........
        .....................................eeeddddddddddddeee.........
        ......................................eeeddddddddddeee..........
        .......................................eeeeeeeeeeeeee...........
        ........................................eeeeeeeeeeee............
        `)
    adventure.addToTextlog("you have been traveling for 2 days and you decide to pitch camp so you say...")
    adventure.addToTextlog("press (A) to say lets pitch camp here")
    adventure.addToTextlog("press (B) to say lets move on")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("lets pitch camp here")
        quest3()
    } else {
        adventure.addToTextlog("lets move on. this might not be a good idea!")
        bad_adventure2()
    }
}
function escaped () {
    adventure.addToTextlog("you escaped the fox but not for long. you hear him in the distance so you run faster and faster until you don't hear the fox any more")
    adventure.addToTextlog("press (A) to shelter for the night under a tree")
    adventure.addToTextlog("press (B) to look for another place to lay down in")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you lay down under the tree and you survived the night (the fox might find you)")
        end_of_your_adventure()
    } else {
        adventure.addToTextlog("you look for another place to sleep and you find a hole in the ground so you go in to the hole (you survived the night but you have to keep moving)")
        keep_moving()
    }
}
function catch_the_mole_infant () {
	
}
function end_of_your_adventure () {
	
}
function end_of_the_game () {
	
}
function ask_more () {
	
}
function bad_adventure1 () {
    adventure.addToTextlog("you decide to go on your own you start traveling alone. you have been traveling for an hour now and you stumble upon a fox")
    adventure.addToTextlog("press (A) to fight the fox")
    adventure.addToTextlog("press (B) to run from the fox")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you start to fight with the fox you get badly injured. then the fox finishes you and slays you")
        game.over(false)
    } else {
        adventure.addToTextlog("you decided to run for it. you escape the fox")
        escaped()
    }
}
function keep_moving () {
    adventure.addToTextlog("you wake up with a baby mole on top of you. and then you get up but the baby mole got scared and ran farther in to the den")
    adventure.addToTextlog("press (A) to try to catch the baby mole")
    adventure.addToTextlog("press (B) to stay there and wait for the baby mole to come back")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you say wait come back here wile you catch the baby mole")
        catch_the_mole_infant()
    } else {
        adventure.addToTextlog("you stay there for some time then you see a little head poke out")
        play_the_waiting_game()
    }
}
function play_the_waiting_game () {
    adventure.addToTextlog("you stay there for awhile having a staring competion")
    adventure.addToTextlog("press(A) to say come over here")
    adventure.addToTextlog("press(B) to keep staring")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("the little mole doesn't come at first. but after awhile he cautiously comes towards you")
    } else {
        adventure.addToTextlog("you keep staring for awhile until you hear a Russell of leaves outside")
        end_of_the_game()
    }
}
function bad_adventure2 () {
	
}
music.play(music.createSong(assets.song`to_the_ballroom`), music.PlaybackMode.LoopingInBackground)
adventure.addImageToTextLog(img`
    ..............c...........................eeeeeee...............
    .............cbb.........................e4444444e..............
    .............ccb.......................eee4ddddd44e.............
    .............cbb.......................e4ee4555554e.............
    .............ccb.....................eee444e44444e..............
    .............cbb.....................eeeee44eeeee...............
    .............ccb...........bccccccccccc1........................
    .............cbb..........bcccccccccccbb1.......................
    .............ccb.........bcceee44444eeebb1......................
    .............cbb.........cceeee44444eeeebb......................
    .............ccb.........cceeee55555eeeebb......................
    .............cbb.........cc54eedddddee45bb......................
    .............ccb.........cc54eed444dee45bb......................
    .............cbb.........cc54eed444dee45bb......................
    .............ccb.........cccbbbbbbbbbbbcbb......................
    .............cbb.........ccccbbbbbbbbccbbb......................
    .............ccb.........cccccccccccccbbbb......................
    .............cbb.........ccccccccbcbbbbbbb......................
    .............ccb.........cccccccccbbbbbbbb......................
    .............cbb.........ccccccccbcbbbbbbc......................
    .............ccb.........cccccccccbbbbbbbc......................
    .............cbb.........ccccccccccbbbbccc888...................
    .............ccb......88ffcccccccbcbbbccc8f188..................
    .............cbb.....8cbbffcccccccbbbbcc8fcb1188................
    .............ccb....8bbccbcf8ccbcccbbccffcccbb188...............
    .............cbb...8bcbcbcb8ffcccccccc8fccccccb188..............
    .............ccb...8cbccccc8ffffffffffff88cccccb18..............
    .............cbb..8bccccc8ffccccbcbcbbcdff8ccccbb8..............
    ..........ee.ccb.ee8cccc8ffccccccbbbbddbbff8ccccc8..............
    ...........eeeeeeefff888ffcccccbcdbddbbbbbf888888...............
    ...........fffffffffffff8cccbcbcbbbdbbbbbbfffffff...............
    ..........fffffffffffccf8ccbcbcbcbbbdbbbbb8ffcccb...............
    ..........fffffffffffccf8cccbcbcbbbdbbbbbb8ffcccb...............
    ..........fffffffffffccffccccbcbccbbdbbbb8f.fcccb...............
    ..........fffffffffffff.8f8ffffffffffff88f...cccb...............
    ...........ffffff.fff.....f8888888888888f....cccb...............
    .............eec..........ffffffffffffff.....cccb...............
    .............eec........eeeeeee4eeeeeeeeee...cccb...............
    ..............e.........eeeeede4d5d5deeeee...fccb...............
    ..............e........eeeee45e45d5d5d4eeee..fccb...............
    .......................eeee45de4d5d5d5d4eee..cccb...............
    .......................eeeeed5e45d5eed5eeee.ffffb...............
    .......................eeee45de4d5dee5d4eee.fffffc..............
    .......................eee4de5ee5d5eeded4eeffffffc..............
    .......................ee4e4d4eed4dee4d4eeeffffffc..............
    .......................eee4e4eee4d4eee4e4eefffffff..............
    .......................ceeeeeeeee4eeeeeeeecfffffff..............
    .......................ceeeeeeee4e4eeeeeeec.ffffff..............
    .......................cffffffeeeeeeefffffc..ffff...............
    .......................cbccccceeeeeeeccccbc.....................
    .......................bccccccfffffffcccccb.....................
    .......................cbcccccc....ccccccbc.....................
    .......................bccccccc....cccccccb.....................
    .......................cbccccc......cccccbc.....................
    .......................bcccccc......ccccccb.....................
    ......................ffffffff......ffffffff....................
    ......................ffffffff......ffffffff....................
    .......................ffffff........cfffff.....................
    .......................bffffc........cffffb.....................
    .......................cffffc........cffffc.....................
    .......................ffffcc........fcffff.....................
    .......................fffccf........ffcfff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................ffffff........ffffff.....................
    .......................cccccc........fccccc.....................
    .......................cffffc........cffffc.....................
    ......................fcffffcf......fcffffcf....................
    ......................cfffffcc......ccffffcc....................
    .....................ffffffffff....fcffffffcc...................
    `)
adventure.addToTextlog("you are an outcast of redwall a shrew looking for an adventure your wandering in mossflower you find a traveling mole")
adventure.addToTextlog("Press (A) to join the mole and travel together.")
adventure.addToTextlog("Press (B) to say no I work alone!.")
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    adventure.addToTextlog("Great! lets go!")
    quest2()
} else {
    adventure.addToTextlog("you decide to not go with the mole. your adventure might end poorly.")
    bad_adventure1()
}
