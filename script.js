const background = document.querySelector(".backgroundMove"),
  hoverLeft = document.querySelector(".hover-left"),
  hoverRight = document.querySelector(".hover-right"),
  charContainer = document.querySelector(".chars-imgs"),
  charOne = document.querySelector(".char-1"),
  charTwo = document.querySelector(".char-2"),
  dialogContainer = document.querySelector(".character-dialog"),
  dialogText = document.querySelector(".dialog-text");

hoverLeft.addEventListener("mouseover", () => {
  charContainer.style.transform = "translateX(20%)";
  charTwo.style.right = "-50%";
  background.style.transform = "translateX(20%) scale(1.5)";
});

hoverLeft.addEventListener("mouseout", () => {
  charContainer.style.transform = "translateX(0%)";
  charTwo.style.right = "0%";
  background.style.transform = "translateX(0%) scale(1.5)";
});

hoverRight.addEventListener("mouseover", () => {
  charContainer.style.transform = "translateX(-20%)";
  charOne.style.left = "-50%";
  background.style.transform = "translateX(-20%) scale(1.5)";
});

hoverRight.addEventListener("mouseout", () => {
  charContainer.style.transform = "translateX(0%)";
  charOne.style.left = "0%";
  background.style.transform = "translateX(0%) scale(1.5)";
});

// Kumpulan dialog untuk setiap karakter
const dialogMessages = {
  charOne: [
    "Hai, sensei!",
    "Senang bertemu denganmu hari ini.",
    "Apakah kamu sudah sarapan?",
    "Cuaca hari ini cerah sekali, bukan?",
    "Aku punya cerita menarik hari ini!",
  ],
  charTwo: [
    "Halo sensei! mau ngapain hari ini?",
    "Apa kabar hari ini?",
    "Ingin mendengar lelucon?",
    "Aku baru saja mengalami petualangan seru!",
    "Semangat pagi!",
  ],
};

// Objek untuk melacak dialog yang sudah ditampilkan
const usedDialogs = {
  charOne: [],
  charTwo: [],
};

// Fungsi untuk mendapatkan dialog unik
function getUniqueDialog(character) {
  const availableDialogs =
    dialogMessages[character === charOne ? "charOne" : "charTwo"];
  const usedDialogsForCharacter =
    usedDialogs[character === charOne ? "charOne" : "charTwo"];

  // Reset dialog jika semua dialog sudah digunakan
  if (usedDialogsForCharacter.length === availableDialogs.length) {
    usedDialogsForCharacter.length = 0;
  }

  // Pilih dialog yang belum pernah digunakan
  let selectedDialog;
  do {
    selectedDialog =
      availableDialogs[Math.floor(Math.random() * availableDialogs.length)];
  } while (usedDialogsForCharacter.includes(selectedDialog));

  // Tambahkan dialog ke daftar yang sudah digunakan
  usedDialogsForCharacter.push(selectedDialog);

  return selectedDialog;
}

// Fungsi untuk menampilkan dialog
function showDialog(character, dialogMessage) {
  // Pindahkan karakter ke tengah
  charContainer.style.transform =
    character === charOne ? "translateX(20%)" : "translateX(-20%)";

  // Gerakkan karakter lain
  if (character === charOne) {
    charTwo.style.right = "-50%";
    background.style.transform = "translateX(20%) scale(1.5)";

    // Tampilkan dialog untuk karakter pertama
    dialogText.textContent = dialogMessage || getUniqueDialog(character);
    dialogContainer.classList.add("show");
  } else {
    charOne.style.left = "-50%";
    background.style.transform = "translateX(-20%) scale(1.5)";

    // Tampilkan dialog untuk karakter kedua
    dialogText.textContent = dialogMessage || getUniqueDialog(character);
    dialogContainer.classList.add("show");
  }
}

// Fungsi untuk menyembunyikan dialog
function hideDialog() {
  // Kembalikan posisi karakter
  charContainer.style.transform = "translateX(0%)";
  charOne.style.left = "0%";
  charTwo.style.right = "0%";
  background.style.transform = "translateX(0%) scale(1.5)";

  // Sembunyikan dialog
  dialogContainer.classList.remove("show");
}

// Event listener untuk hover kiri
hoverLeft.addEventListener("mouseover", () => {
  showDialog(charOne);
});

hoverLeft.addEventListener("mouseout", hideDialog);

// Event listener untuk hover kanan
hoverRight.addEventListener("mouseover", () => {
  showDialog(charTwo);
});

hoverRight.addEventListener("mouseout", hideDialog);
