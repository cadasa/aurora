const csv = `link,title
../cambridge/images/cambridge.png,cambridge
../cambridge/images/environment.jpg,environment`

/*function openPopup(link) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '17.5%';
  popup.style.transform = 'translate(-10%, -10%)';
  popup.style.backgroundColor = 'white';
  //popup.style.border = '2px solid black';
  //popup.style.padding = '10px';
  popup.style.height = '80%';
  popup.style.width = '80%';
  popup.style.zIndex = 9999;
  const iframe = document.createElement('iframe');
      iframe.src = link;
      iframe.style.width = '100%';
      iframe.style.height = '100%';

  const close = document.createElement('div');
      close.innerText = '✖️';
      close.style.align = 'center';
      close.style.width = "20px";
      close.style.height = "20px";
      close.style["background-color"] = "white";
      close.style.position = "absolute";
      close.style["z-index"] = 100;
      close.style.top = '0%';
      close.style.left = '100%';
      close.style.cursor = 'pointer';
      //parent.append(close);
  const fullscreen = document.createElement('div');
      fullscreen.innerText = '🖥️';
      fullscreen.style.width = "20px";
      fullscreen.style.height = "20px";
      fullscreen.style["background-color"] = "white";
      fullscreen.style.position = "absolute";
      fullscreen.style["z-index"] = 100;
      fullscreen.style.top = `20px`;
      fullscreen.style.left = `100%`;
      fullscreen.style.cursor = 'pointer';
      //parent.append(fullscreen);

  const closePopup = () => {
        document.body.removeChild(popup);
        popup.removeChild(close);
        popup.removeChild(fullscreen);
        if (closeCallback) closeCallback();
      };

  const maxPopup = () => {
        popup.requestFullscreen();
        if (closeCallback) closeCallback();
      };


  close.onclick = (e) => {
        closePopup();
        e.stopPropagation();
        return false;
      };

  fullscreen.onclick = (e) => {
        maxPopup();
        e.stopPropagation();
        return false;
      };
  popup.appendChild(iframe);
  popup.appendChild(close);
  popup.appendChild(fullscreen);
  document.body.appendChild(popup);
}*/

const listingDiv = document.getElementById('listings');
// Use PapaParse to parse the CSV data
const items = Papa.parse(csv, { header: true }).data;



  /*items.forEach(item => {
    const li = document.createElement('h4');
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.title;
    a.onclick = (event) => {
      event.preventDefault();
      openPopup(item.link);
    };
    li.appendChild(a);
    listingDiv.appendChild(li);
  });*/
const side = document.querySelector('.side');
const cgrdside = document.querySelector('.cube.grid .side');
// Add each item to the list
		    items.forEach(item => {
					// Create a list item element
					const li = document.createElement('h4');

					// Create a link element
					const a = document.createElement('a');
					a.href = item.link;
					a.target = 'iframe';
					a.textContent = item.title;
					a.addEventListener('click', e => {
						e.preventDefault();
						//document.getElementById('side').src = e.href;
            const selectedImage = `url(${e.href})`;
            const selectedImage2 = `url('../images/grid.jpg'), url(${e.href})`;
            side.style.backgroundImage = selectedImage;
            cgrdside.style.backgroundImage = selectedImage2;
					});

					// Append the link to the list item
					li.appendChild(a);

					// Append the list item to the listing
					listingDiv.appendChild(li);
				});
// Generate HTML code for the list
//const listHtml = items.map(item => '<p><b><a href="' + item.link + '" style="text-decoration: none;">' + item.title + '</a></p>').join('');

// Add the list to the sidebar
//listingDiv.innerHTML = listHtml;
//const map = new mapboxgl.Map({
//    container: 'map',
//  });
if (window.location !== window.parent.location) {
  // The code is running inside an iframe
} else {
  // The code is not running inside an iframe

function toggleSidebar(id) {
const elem = document.getElementById(id);
// Add or remove the 'collapsed' CSS class from the sidebar element.
// Returns boolean "true" or "false" whether 'collapsed' is in the class list.
const collapsed = elem.classList.toggle('collapsed');
const padding = {};
// 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
  padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.

// Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
map.easeTo({
padding: padding,
duration: 1000 // In ms. This matches the CSS transition duration property.
});
}
}

//map.on('load', () => {
//toggleSidebar('left');
//});
