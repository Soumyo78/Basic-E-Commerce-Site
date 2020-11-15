var item_1_count = 0;
var item_2_count = 0;
var item_3_count = 0;
var item_4_count = 0;

var item_1_price = 49999;
var item_2_price = 13490;
var item_3_price = 25999;
var item_4_price = 179990;

document.getElementById("item-1-btn+").addEventListener("click", () => {
    item_1_count += 1;
    document.getElementById("item-1-digit").value = item_1_count;
    return item_1_count;
  });

document.getElementById("item-1-btn-").addEventListener("click", () => {
    if(item_1_count > 0){
        item_1_count -= 1;
        document.getElementById("item-1-digit").value = item_1_count;
        return item_1_count;
    }
  }); 

document.getElementById("item-2-btn+").addEventListener("click", () => {
    item_2_count += 1;
    document.getElementById("item-2-digit").value = item_2_count;
    return item_2_count;
  });

document.getElementById("item-2-btn-").addEventListener("click", () => {
    if(item_2_count > 0){
        item_2_count -= 1;
        document.getElementById("item-2-digit").value = item_2_count;
        return item_2_count;
    }
  });

document.getElementById("item-3-btn+").addEventListener("click", () => {
    item_3_count += 1;
    document.getElementById("item-3-digit").value = item_3_count;
    return item_3_count;
  });

document.getElementById("item-3-btn-").addEventListener("click", () => {
    if(item_3_count > 0){
        item_3_count -= 1;
        document.getElementById("item-3-digit").value = item_3_count;
        return item_3_count;
    }
  });

document.getElementById("item-4-btn+").addEventListener("click", () => {
    item_4_count += 1;
    document.getElementById("item-4-digit").value = item_4_count;
    return item_4_count;
  });

document.getElementById("item-4-btn-").addEventListener("click", () => {
    if(item_4_count > 0){
        item_4_count -= 1;
        document.getElementById("item-4-digit").value = item_4_count;
        return item_4_count;
    }
  });

document.getElementById("item-1-btn-cart").addEventListener("click", () => {
    item_1_final_price = item_1_count * item_1_price;
    document.getElementById("item-1-qnt").innerHTML = item_1_count;
    document.getElementById("item-1-price").innerHTML = item_1_final_price;
    return item_1_final_price;
  });

document.getElementById("item-2-btn-cart").addEventListener("click", () => {
    item_2_final_price = item_2_count * item_2_price;
    document.getElementById("item-2-qnt").innerHTML = item_2_count;
    document.getElementById("item-2-price").innerHTML = item_2_final_price;
    return item_2_final_price;
  });

document.getElementById("item-3-btn-cart").addEventListener("click", () => {
    item_3_final_price = item_3_count * item_3_price;
    document.getElementById("item-3-qnt").innerHTML = item_3_count;
    document.getElementById("item-3-price").innerHTML = item_3_final_price;
    return item_3_final_price;
  });

document.getElementById("item-4-btn-cart").addEventListener("click", () => {
    item_4_final_price = item_4_count * item_4_price;
    document.getElementById("item-4-qnt").innerHTML = item_4_count;
    document.getElementById("item-4-price").innerHTML = item_4_final_price;
    return item_4_final_price;
  });

document.getElementById("total-btn").addEventListener("click", () => {

    if(typeof item_1_final_price === 'undefined'){
        item_1_final_price = 0;
    }

    if(typeof item_2_final_price === 'undefined'){
        item_2_final_price = 0;
    }

    if(typeof item_3_final_price === 'undefined'){
        item_3_final_price = 0;
    }

    if(typeof item_4_final_price === 'undefined'){
        item_4_final_price = 0;
    }

    total_price = item_1_final_price + item_2_final_price + item_3_final_price + item_4_final_price;
    document.getElementById('price').innerHTML = total_price;
    return total_price;
  });

document.getElementById("buy-btn").addEventListener("click", () => {
    alert("You have to pay total: ₹ "+total_price+" rupees")
  });