// step 1 set eventhandelar with apply button 

document.getElementById('btn-apply').addEventListener('click', function () {
    const actual_price = document.getElementById('price');
    const actual_price_string = actual_price.value;
    const actual_price_get_forDisplay = parseFloat(actual_price_string);

    const main_price = document.getElementById('actual_price_display');
    main_price.innerText = actual_price_get_forDisplay;

    // step2 : get cupon value 
    const cupon_code = document.getElementById('cupon');
    const cupon_string = cupon_code.value;

    if (cupon_string !== 'DOM') {
        alert(" Invalid code ! Please Type correct Code ");
        return
    }
    else {
        const total_discount_price = actual_price_get_forDisplay - ((30 / 100) * actual_price_get_forDisplay);
        const discount_price = document.getElementById('discount_price_display');
        discount_price.innerText = total_discount_price;

    }
    actual_price.value = '';
    cupon_code.value = '';

    // console.log(cupon_string);


    // console.log(total_discount_price)
})