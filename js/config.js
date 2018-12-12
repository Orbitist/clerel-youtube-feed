$('#tubber-container').tubber({
	apiKey: 'AIzaSyBUxJlF3Mbe8z1apgKTQ4FRqxfkj7-y8oY',
	username: 'LERGPCLEREL',
	itemsPerPage: 6,
	embedVideo: false,
	loadingControl: $('#tubber-loader'),
	prevPageControl: $('#tubber-prev'),
	nextPageControl: $('#tubber-next'),
	mediaViewer: $('#tubber-viewer'),
  showVideoTitle: true,
  showVideoDescription: false,
	templates: {
		thumbnail: '<img src="{{image_medium}}">',
    videoTitle: '<p class="title">{{title}}</p>',
    videoDescription: '<p class="description">{{description}}</p>'
	}
});
