const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
// const signUpBtn = document.querySelector("#SignUpBtn"); // Ini mungkin sudah tidak diperlukan jika SignUpBtn adalah link
// const signInBtn = document.querySelector("#SignInBtn"); // Ini juga mungkin tidak diperlukan untuk validasi submit

// Dapatkan elemen input email dan password
const emailInput = document.getElementById('log-email');
const passwordInput = document.getElementById('log-pass');

// --- Fungsi Transisi Form (dari kode Anda sebelumnya) ---
function loginFunction(){
    loginForm.style.left = "50%";
    loginForm.style.opacity = 1;
    registerForm.style.left = "150%";
    registerForm.style.opacity = 0;
    wrapper.style.height = "500px";
    loginTitle.style.top = "50%";
    loginTitle.style.opacity = 1;
    registerTitle.style.top = "50px";
    registerTitle.style.opacity = 0;
}

function registerFunction(){
    loginForm.style.left = "-50%";
    loginForm.style.opacity = 0;
    registerForm.style.left = "50%";
    registerForm.style.opacity = 1;
    wrapper.style.height = "580px";
    loginTitle.style.top = "-60px";
    loginTitle.style.opacity = 0;
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = 1;
}

// --- Logika Validasi dan Navigasi ---
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan loginForm ditemukan sebelum menambahkan event listener
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Menghentikan pengiriman form default
            event.preventDefault();

            // Ambil nilai dari input email dan password
            const email = emailInput.value.trim(); // .trim() untuk menghapus spasi awal/akhir
            const password = passwordInput.value.trim();

            // Lakukan validasi sederhana
            if (email === '' || password === '') {
                alert('Email dan Kata Sandi harus diisi!'); // Beri peringatan ke pengguna
                // Anda bisa menambahkan feedback visual lain di sini,
                // misalnya, mengubah border input menjadi merah, dll.
            } else {
                // Jika email dan password sudah terisi, baru arahkan ke halaman web lain
                // Ganti '/Isi_perpustakaan/index.html' dengan path yang benar ke halaman tujuan Anda
                window.location.href = '/Isi_perpustakaan/index.html';
                // Jika Anda perlu mengirim data ke server (misalnya untuk otentikasi nyata),
                // ini adalah tempat di mana Anda akan menggunakan fetch() atau XMLHttpRequest.
                // Contoh:
                // authenticateUser(email, password)
                //     .then(response => {
                //         if (response.success) {
                //             window.location.href = '/Isi_perpustakaan/index.html';
                //         } else {
                //             alert('Email atau Kata Sandi salah!');
                //         }
                //     })
                //     .catch(error => console.error('Error:', error));
            }
        });
    }

    // Jika Anda memiliki tombol atau link yang memicu transisi form
    // Pastikan event listener untuk itu tidak bertentangan dengan submit form.
    // Contoh:
    // const signInNavLink = document.querySelector('.some-nav-link-for-signin'); // Misal ada link di nav
    // if (signInNavLink) {
    //     signInNavLink.addEventListener('click', loginFunction);
    // }
    // const registerNavLink = document.querySelector('.some-nav-link-for-register'); // Misal ada link di nav
    // if (registerNavLink) {
    //     registerNavLink.addEventListener('click', registerFunction);
    // }

    // Jika tombol di dalam switch-form memanggil fungsi registerFunction()
    // seperti <a href="#" onclick="registerFunction()">Register</a>
    // Maka tidak perlu event listener JS lagi untuk itu.
});