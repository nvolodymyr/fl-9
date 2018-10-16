let objData = [];
let count = 0;
$(document).ready(function () {
    let container = document.getElementById('container');
    $.getJSON("./data/media.json", function (json) {
        objData = json;

        for (count; count < 12; count++) {
            let imgDiv = $('<div class="imgDiv"></div>');
            let img = $('<img/>', {
                id: objData.media[count].id,
                class: 'galleryParanetr',
                src: objData.media[count].display_url,
            });
            let hoverDiv = $('<div class="hoverDiv"></div>', {});
            imgDiv.appendTo(container);
            hoverDiv.appendTo(imgDiv);
            img.appendTo(imgDiv);
        }
    });
});
$('div').on('click', '.galleryParanetr', function () {
    let id = $(this).attr("id");
    popUp(id);
});

function popUp(imgid) {
    let appearInfo = $('<div class="appearInfo" ></div>');
    let $appearBg = $('<div class="appearBg" onclick="closeImage()"></div>');
    let $appearDiv = $('<div class="appearDiv"></div>');
    let next = $('<span class="next"></span>');
    let prev = $('<span class="prev"></span>');
    for (let i = 0; i < 21; i++) {
        if (imgid === objData.media[i].id) {
            let appearImg = $('<img/>', {
                class: 'appearImage',
                id: objData.media[i].id,
                src: objData.media[i].display_url,
                alt: 'appearImage'
            });
            let userInfo = $('<div class="userInfo"></div>');
            let userpar = $('<p></p>', {
                text: objData.username,
            });
            let imgInfo = $('<p></p>', {
                text: objData.media[i].edge_media_to_caption,
            });
            $('#container').append($appearBg);
            $($appearBg).append($appearDiv);
            $($appearBg).append(prev);
            $($appearBg).append(next);
            $($appearDiv).append(appearImg);
            $($appearDiv).append(appearInfo);
            $(userInfo).append(userpar, imgInfo);
            $(appearInfo).append(userInfo);
            $('.appearBg .appearDiv').on('click', function (e) {
                e.stopPropagation();
            });
            let prevId = objData.media[i - 1].id;
            let nextId = objData.media[i + 1].id;
            $('.appearBg .next').on('click', function (e) {
                closeImage();
                popUp(nextId);
                e.stopPropagation();
            });
            $('.appearBg .prev').on('click', function (e) {
                closeImage();
                popUp(prevId);
                e.stopPropagation();
            });

        }
    }
}

function closeImage() {
    $('.appearBg').remove();
}
$('#viewMore').on('click', function () {
    let till = count + 6;
    for (count; count < till && count < objData.media.length; count++) {
        let imgDiv = $('<div class="imgDiv"></div>');
        let img = $('<img/>', {
            id: objData.media[count].id,
            class: 'galleryParanetr ',
            src: objData.media[count].display_url,
        });
        let hoverDiv = $('<div class="hoverDiv"></div>', {});
        imgDiv.appendTo(container);
        hoverDiv.appendTo(imgDiv);
        img.appendTo(imgDiv);
    }
});