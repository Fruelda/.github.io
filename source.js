const square = ['1','2','3','4','q','w','e','r','t','a','d','f','z','x','c','v']
const keys = document.querySelectorAll('.key')
const squareKey = document.querySelectorAll('.key.square')

const kickAudio = new Audio('sound/kick.mp3')
const percussionAudio = new Audio('sound/percussion.mp3')
const extraAudio = new Audio('sound/extra.mp3')
const tablaAudio = new Audio('sound/tablaKick.wav')
const wuhAudio = new Audio('sound/Wuh.mp3')
const uhAudio = new Audio('sound/Uh.mp3')
const ahhAudio = new Audio('sound/ahh.mp3')
const kick2Audio = new Audio ('sound/kick2.mp3')
const snareAudio = new Audio ('sound/snare.mp3')
const vocalAudio = new Audio ('sound/Vocal.wav')
const boomAudio = new Audio ('sound/Boom.mp3')
const saluteAudio = new Audio ('sound/salute.mp3')
const stopAudio = new Audio ('sound/stop.mp3')
const kick3Audio = new Audio ('sound/kick3.mp3')
const riottAudio = new Audio ('sound/riott.mp3')
const riotAudio = new Audio ('sound/riot.mp3')
const kick4Audio = new Audio ('sound/kick4.mp3')

document.addEventListener("keypress", (e)=> {
    console.log(e.code)
    switch(e.code){
        case 'Digit1':
            kickAudio.play()
        break;
        case 'Digit2':
            percussionAudio.play()
        break;
        case 'Digit3':
            extraAudio.play()
        break;
        case 'Digit4':
            tablaAudio.play()
        break;

        case 'KeyQ':
            wuhAudio.play()
        break;
        case 'KeyW':
            uhAudio.play()
        break;
        case 'KeyE':
            ahhAudio.play()
        break;
        case 'KeyR':
            kick2Audio.play()
        break;

        case 'KeyA':
            snareAudio.play()
        break;
        case 'KeyS':
            vocalAudio.play()
        break;
        case 'KeyD':
            boomAudio.play()
        break;
        case 'KeyF':
            saluteAudio.play()
        break;

        case 'KeyZ':
        stopAudio.play()
        break;
        case 'KeyX':
        kick3Audio.play()
        break;
        case 'KeyC':
        riottAudio.play()
        break;
        case 'KeyV':
        riotAudio.play()
        break;
        
    }
})

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key))
})

document.addEventListener('keydown',e =>{
    if(e.repeat) returns
    const key = e.key
    const squareKeyIndex = square.indexOf(key)
    if(squareKeyIndex > -1) playNote(squareKeyIndex[squareKey])
})



function playNote(key) {

    switch(key) {
        case 'kick':
            kickAudio.play()
        break;
        case 'snare':
            percussionAudio.play()
        break;
        case 'extra':
            extraAudio.play()
        break;
        case 'tablaKick':
            tablaAudio.play()
        break;
        case 'wuh':
            wuhAudio.play()
        break;
        case 'uh':
            uhAudio.play()
        break;
        case 'ahh':
            ahhAudio.play()
        break;
        case 'kick2':
            kick2Audio.play()
        break;
        case 'snaree':
            snareAudio.play()
        break;
        case 'vocal':
            vocalAudio.play()
        break;
        case 'boom':
            boomAudio.play()
        break;
        case 'salute':
            saluteAudio.play()
        break;
        case 'stop':
        stopAudio.play()
        break;
        case 'kick3':
        kick3Audio.play()
        break;
        case 'riott':
        riottAudio.play()
        break;
        case 'riot':
        riotAudio.play()
        break;
        case 'kick4':
        kick4Audio.play()
        break;

        default:
          // code block
    }
    


}
