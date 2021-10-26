
var gallery = [
    {
        name: "Land Rover Defender",
        price: "$50 000",
        source: "url(../img/1_LandRover\\ Defender.png)"
    },

    {
        name: "Jeep SUV",
        price: "$28 000",
        source: 'url(../img/2_Jeep\\ SUV.png)'
    },
    
    {
        name: "Jeep Pickup",
        price: "$20 000",
        source: 'url(../img/3_Jeep\\ pickup.png)'
    },

    {
        name: "Isuzu Suv",
        price: "$40 000",
        source: 'url(../img/4_ISUZU\\ SUV.png)'
    },

    {
        name: "Gmc pickup",
        price: "$45 000",
        source: 'url(../img/5_GMC\\ pickup.png)'
    },

    {
        name: "Jeep",
        price: "$30 000",
        source: 'url(../img/6_Jeep.png)'
    },

    {
        name: "Colorado Pickup",
        price: "$41 000",
        source: 'url(../img/7_Colorado\\ Pickup.png)'
    },

    {
        name: "D-max Pickup",
        price: "$32 000",
        source: 'url(../img/8_D-MAX\\ Pickup.png)'
    },

    {
        name: "Jeep Wildlife",
        price: "$25 000",
        source: 'url(../img/9_Jeep\\ wildlife.png)'
    },

    {
        name: "Landrover",
        price: "$15 000",
        source: 'url(../img/10_landrover.png)'
    },

    {
        name: "Toyota Suv",
        price: "$30 000",
        source: 'url(../img/11_Toyota\\ SUV.png)'
    },

    {
        name: "Nissan Pickup",
        price: "$26 000",
        source: 'url(../img/12_Nissan\\ Pickup.png)'
    },


]

var galleryItem = document.getElementById("row");


let html = "";

gallery.forEach(index => {
    html += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 gallery">
        <figure class="gallery--img" style= "--background-img: ${index.source}" >
            <div class="gallery__shade"></div>
        </figure>
                        
        <figcaption class="gallery--info">
            <h3 class="text-uppercase fw-bold mb-1">${index.name}</h3>
            <p class="color-black fw-bold">${index.price}</p>
            <div class="gallery__shade"></div>
        </figcaption>
        </div>
    `
    galleryItem.innerHTML = html
})

// function getStyleById(selector) {
//     return getAllStyles(document.querySelector(selector));
// }
// function getAllStyles(elem) {
//     if (!elem) return []; // Element does not exist, empty list.
//     var win = document.defaultView || window, style, styleNode = [];
//     if (win.getComputedStyle) { /* Modern browsers */
//         style = win.getComputedStyle(elem, '');
//         for (var i=0; i<style.length; i++) {
//             styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) );
//             //               ^name ^           ^ value ^
//         }
//     } else if (elem.currentStyle) { /* IE */
//         style = elem.currentStyle;
//         for (var name in style) {
//             styleNode.push( name + ':' + style[name] );
//         }
//     } else { /* Ancient browser..*/
//         style = elem.style;
//         for (var i=0; i<style.length; i++) {
//             styleNode.push( style[i] + ':' + style[style[i]] );
//         }
//     }
//     return styleNode;
// }