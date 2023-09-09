document.addEventListener('DOMContentLoaded', function () {
    const namaInput = document.getElementById('namaInput');
    const btnOk = document.getElementById('btnOk');
    const suratContainer = document.getElementById('suratContainer');
    const suratContent = document.getElementById('suratContent');

    btnOk.addEventListener('click', function () {
        const nama = namaInput.value;

        if (nama.trim() === '') {
            alert('Harap isi nama Anda.');
            return;
        }

        typeWriterEffect(nama);
    });

    function typeWriterEffect(nama) {
        suratContainer.classList.remove('hidden');

        const pesan =
            `${nama} sebenernya aku suka sama kamu, sesingkat itu karena aku nyaman sama kamu, tapi jujur aku tidak spesial cowok-cowok diluar sana, aku lahir dari keluarga yang sederhana, aku mempunyai beberapa kekurangan, aku gak ganteng... aku gak kaya..., aku takutnya gak bisa ngebahagian kamu, aku takut kamu juga gak bahagia dengan aku... aku aja untuk makan di kehidupan sehari-hari itu aja masih kurang apalagi membuat kamu bahagia, soalnya aku takut gak bisa memberi apa yang kamu minta, seperti orang tua kamu selalu memanjakan kamu... jujur saja aku, keluarga aku sederhana banget... kehidupan aku di jember itu sederhana, aku dikasih uang saku itupun hanya 100 ribu per minggu... cukup gak cukup aku harus atur keuangan aku selama di jember, karena aku tau susahnya mencari uang... apakah aku masih pantas buat ngebangun hubungan sama kamu? menurut aku tidak pantas karena aku gak bisa apa-apa, uang saja aku masih minta ke orang tua dan sebagian hasil aku sendiri tapi itu masih belum mencukupi kehidupan aku, jadi aku selalu ngerasa gak pantas aja untuk membangun hubungan dengan kamu, karena aku jauh dari kata sempurna... mungkin itu aja dari aku, sebenernya aku mau bilang ini pas aku sangat nyaman didekat kamu, karena kamu imut, baik dan cantik... Semoga kamu dapat orang yang lebih pantas dari aku, yang selalu bisa memberi mu apa saja, belikan itu... belikan ini... kalau aku pasti masih nabung buat memberi sesuatu... Semoga kamu dapat yang pantas dengan kamu :)`;

        let index = 0;
        const speed = 50;

        suratContent.innerHTML = '';

        function type() {
            if (index < pesan.length) {
                suratContent.innerHTML += pesan.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }
});