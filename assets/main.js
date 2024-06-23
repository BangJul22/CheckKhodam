function chekKhodam(event){
    event.preventDefault();
    let nama = $('#search').val();
        if(nama == ''){
            alert('Nama tidak boleh kosong')
        }else{
            let status = [
                'isi',
                'kosong'
            ]
            const randomStatus = Math.floor(Math.random() * status.length);
            if(randomStatus == 0){
                let khodam = [
                    'sayang',
                    'Sepeda Rusak',
                    'Polisi Selingkuh',
                    'Khodam harimau putih',
                    'Khodam ular naga',
                    'Khodam buaya putih',
                    'Khodam bhatara karang',
                    'Khodam Sulaiman',
                    'orang gila',
                    'burung kaka Tua',
                    'teman selingkuh',
                    'kuda lari',
                    'kuda jebra',
                    'profesor',
                    'S.pd',
                    'S.Kom',
                    'PPG',
                    'organisasi',
                    'kuliah',
                    'wibu',
                    'jepang',
                    'barang',
                    'I Love You Palestina',
                    'israel gk punya otak',
                    'israel tolol',

                ];
                const random = Math.floor(Math.random() * khodam.length);
                $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
                $('#search').val('');

            }else{
                $('#result').html(`${nama.toUpperCase()} - Kosong`);
                $('#search').val('');
            }
        
        }
    }

    $(document).ready(function(){
        $('#btn-search').click(chekKhodam);
    })