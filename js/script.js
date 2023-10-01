// const tanah = document.querySelectorAll('.tanah')
// const kuntolo = document.querySelectorAll('.kuntolo')
// const papanSkor = document.querySelector('.papan-skor')
// const ah = document.querySelector('#ah')

// let tanahSebelumnya; 
// let selesai;
// let skor;

// function randomTanah(tanah) {
//     const t = Math.floor(Math.random() * tanah.length)
//     const tRandom = tanah[t];
//     if (tRandom == tanahSebelumnya) {
//         randomTanah(tanah);
//     }
//     tanahSebelumnya = tRandom;
//     return tRandom;

// }

// function randomWaktu(min, max) {
//     return Math.round(Math.random() * (max - min ) + min)
// }

// function munculkanTikus() {
    
//     const tRandom = randomTanah(tanah)
//     const wRandom = randomWaktu(300, 800)
//     tRandom.classList.add('muncul')
    
//     setTimeout(() => {
//         tRandom.classList.remove('muncul')
//         if(!selesai) {
//             munculkanTikus()
//         }
//     }, wRandom); 
// }


// function mulai() {
//     selesai = false;
//     skor = 0;
//     papanSkor.textContent = 0;
    
//     munculkanTikus();
//     setTimeout(() => {
//         selesai = true;
//     }, 10000);
// }
 
// function pukul() {
//     skor++;
//     papanSkor.textContent = skor;
//     this.parentNode.classList.remove('muncul');
//     ah.play()
// }

// kuntolo.forEach(t => {
//     t.addEventListener('click', pukul)
// })

const tanah = document.querySelectorAll('.tanah');
const kuntolo = document.querySelectorAll('.kuntolo');
const papanSkor = document.querySelector('.papan-skor');
const ah = document.querySelector('#ah');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        return randomTanah(tanah); // Return directly to avoid potential issues
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
    if (!selesai) {
        const tRandom = randomTanah(tanah);
        const wRandom = randomWaktu(300, 800);
        tRandom.classList.add('muncul');

        setTimeout(() => {
            tRandom.classList.remove('muncul');
            munculkanTikus();
        }, wRandom);
    }
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;

    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    if (!selesai) {
        skor++;
        papanSkor.textContent = skor;
        this.classList.remove('muncul');
        ah.play();
    }
}

kuntolo.forEach(t => {
    t.addEventListener('click', pukul);
});

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', mulai);
