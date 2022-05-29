// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: true,
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019
        },
        {
            name: "SMA 03",
            city: "Tangerang"
        }
    ],
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"] 
};
const secondUser = {};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};