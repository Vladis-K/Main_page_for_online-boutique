//JS
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    allTogether(JSON.parse(xhr.responseText));
                }
            function allTogether(getData) {
                var out = "";
                var allData = getData.response.length;
                var insert = document.getElementById("upload");
                var start = 0;

                    for (var i = start; i < allData; i++) {

                    out += '<div class="allList col-xs-12 col-sm-3 col-md-3 col-lg-3">';
                    out += '<img src="' + getData.response[i].image + '"' + ' class="img-responsive" alt=" ' + getData.response[i].title + ' ">';
                    out += '<button type="button" class="new-clothes btn btn-primary ' + getData.response[i].label + '">NEW</button>';
                    out += '<div class="depiction text-center">' + '<p>' + getData.response[i].title + '</p>';
                    out += '<p>' + '<span class="price">'+ getData.response[i].price +'</span>';
                    out += '<span class="old_price">'+ getData.response[i].oldPrice +'</span>';
                    out += '<span class="now_price">'+ getData.response[i].nowPrice +'</span>';
                    out += '</p>' + '</div>' + '</div>';
                }

                insert.innerHTML = out;
                insert.classList.add("slide");
            }
        };

        xhr.open('GET', 'img/info.json', true);
        xhr.send(null);



