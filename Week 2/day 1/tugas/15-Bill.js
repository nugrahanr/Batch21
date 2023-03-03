/** hitung total gaji karyawan */
/*
function totalGaji(gaji1, gaji2, gaji3) {
   
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */

    function totalGaji(gaji1, gaji2, gaji3) {
        let pajak1 = taxGaji(gaji1);
        let pajak2 = taxGaji(gaji2);
        let pajak3 = taxGaji(gaji3);
    
        let totalPajak = parseFloat(pajak1) + parseFloat(pajak2) + parseFloat(pajak3);
        let totalGaji = parseFloat(gaji1) + parseFloat(gaji2) + parseFloat(gaji3) + totalPajak;
    
        console.log(`Total gaji yang harus dibayar: 
        Emp1: Rp.${gaji1} + Pajak(${pajak1}) = Rp.${parseFloat(gaji1) + parseFloat(pajak1)}
        Emp2: Rp.${gaji2} + Pajak(${pajak2}) = Rp.${parseFloat(gaji2) + parseFloat(pajak2)}
        Emp3: Rp.${gaji3} + Pajak(${pajak3}) = Rp.${parseFloat(gaji3) + parseFloat(pajak3)}
        Total: Rp.${totalGaji.toFixed(2)}`);
    }
    
    function taxGaji(gaji) {
        if (gaji >= 10000) {
            return (gaji * (10 / 100)).toFixed(2); //kembalikan besaran pajak sesuai gaji
        } else if (gaji >= 1000 && gaji < 10000) {
            return (gaji * (5 / 100)).toFixed(2);
        } else if (gaji >= 100 && gaji < 1000) {
            return (gaji * (2 / 100)).toFixed(2);
        } else {
            return 0;
        }
    }
    
    totalGaji(500, 2000, 12000);
    

    