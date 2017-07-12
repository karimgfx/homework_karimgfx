var products    = ['duffle', 'bandana', 'tee', 'hoodie', 'tote', 'jacket'];
var details     = [
    '100% Cotton Made in Los Angeles, CA',
    '100% Cotton Made in Los Angeles, CA',
    '100% Cotton Made in Los Angeles, CA',
    '100% Cotton Made in Los Angeles, CA',
    '100% Cotton Made in Los Angeles, CA',
    '100% Cotton Made in Los Angeles, CA',
];
var images      = ['duffle.jpg', 'bandana.jpg', 'tee.png', 'hoodie.png', 'tote.png', 'jacket.png'];
var prices      = [25.00, 21.00, 32.00, 75.00, 25.00, 92.00];
var inventories = [5, 5, 5, 5, 5, 5];
var cart        = [0, 0, 0, 0, 0];
var total       = 0;

$(function(){
    //Add products to the store
    $.each(products, function(i,v)
    {
        var string = "";

        string +='<div class="col-xs-4">';
        string +='  <div class="product hoverOn">';

        var image = images[i] || 'default.jpg';
        string +='      <img class="productShot img-thumbnail" src="./images/' + image + '"/>';
        

        string +='      <div class="title">' + products[i] + '</div>';
        string +='      <div class="price">' + currencyFormat(prices[i]) + '</div>';
        string +='      <div class="details">' + details[i] + '</div>';
        string +='      <div class="quantity">Quantity';
        string +=           buildSelect(i);
        string +='      </div>';
        string +='  </div>';
        string +='</div>';

        $('#products').append(string);
    });

    $('#store').on('mouseenter','.hoverOn', function(){
        console.log('hi');
        string = '<button class="btn btn-success">Add To Cart</button>';
        $(this).parent().append(string);

    });

$('#store').on('mouseleave','.hoverOn', function(){
        console.log('bye');
        $('button').remove();
 

    });

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var i = $(this).val();
        var quantity = parseInt($('#' + products[i] + 'Select').val());
        var price = prices[i];



        //Add quantity to cart
        cart[i] = cart[i] + quantity;

        inventories[i] -= quantity;
        //or cart[i] 


        //Add (quantity * price) to total
        total = total + (quantity * price);

        console.log(total, cart);
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart items
        $('#items').html('');

        //Build the cart
        $.each(products,function(index, value) {
            var count = cart[index];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += value;
                string += '<button class="btn btn-danger btn-xs remove pull-right" value=' + index + '>Remove</button>'
                string += '<span class="badge badge-pill badge-default">' + count + '</span>';
                string += '</li>';

                $('#items').append(string);
            }
        });
    });

    //Remove item event
    $('#cart').on('click', '.remove', function(){
        var index = $(this).val();

        //Select the parent and remove it from the DOM
        //Hint: You're gonna need this, parent() and remove() :)
    $(this).parent().remove();

        //Use the index to add items back into the inventory
        inventories[index] += cart[index];


        //Use the index to reset the count
        cart[index] = 0;

        

        console.log(index,inventories);
    });

    //Checkout event
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });

    //This is so that on a small menu it closes once you select a menu item
    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

});

function buildSelect(i)
{
    // i will be the index that gets passed in when buildSelect is invoked
    var product = products[i];
    var inventory = inventories[i];
    var string = '';

    /*
    The lines below will create something like this:
        <select id="applesSelect">
            <option value=1>1</option>
            <option value=2>2</option>
            etc...
        </select>
    There will be an <option></option> up to the max value of "inventory"
    */
    string +='<select id="' + product + 'Select" class="number">';
    var max = inventory || 0;
    for(var count = 1; count <= max; count++)
    {
        string += '<option value=' + count + '>' + count + '</option>';
    }
    string +='</select>';

    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}
