class Messenger {

	init() {
		var container, content;
		container = jQuery('body');
		content = `<div class="msngr-graph msngr-graph-top-right"></div><div class="msngr-graph msngr-graph-bottom-right"></div><div class="msngr-graph msngr-graph-bottom-left"></div><div class="msngr-graph msngr-graph-top-left"></div>`;
		container.append(content);
	}

	run(data) {
		var container, content, close = '', message, name, messenger = new Messenger();
		container = jQuery('.msngr-graph-'+data.location);
		if(!data.duration) {
			close = `<div class="msngr-close" data-id="`+data.id+`">
						<div class="msngr-close-lines msngr-wrapper">
							<div class="msngr-close-line"></div>
							<div class="msngr-close-line"></div>
						</div>
					</div>`;
		}
		content = 	`<div class="msngr msngr-`+data.location+` msngr-`+data.theme+` msngr-`+data.id+`">
						`+close+`
						<div class="msngr-container">
							<div class="msngr-wrapper">
								<div class="msngr-icon">
									<div class="msngr-timer" id="`+data.name+`"></div>
									<div class="msngr-icon-holder msngr-wrapper">
										<span class="fa fa-`+data.icon+`"></span>
									</div>
								</div>
								<div class="msngr-content">
									<div class="msngr-title">`+data.title+`</div>
									<div class="msngr-text">`+data.message+`</div>
								</div>
							</div>
						</div>
					</div>`;

		container.append(content);
		message = jQuery('.msngr-'+data.id);
		name = data.name;
		var bar = new progress.Circle('#'+name, {
			strokeWidth: 5,
			duration: data.duration,
			color: data.color,
			svgStyle: null
		});

		setTimeout(function() {
			message.fadeIn().addClass('active');
			bar.animate(1.0);
			if(data.duration) {
				setTimeout(function() {
					messenger.remove(data.id);
					if(data.redirect) {
						window.location.href = data.redirect;
					}
				}, data.duration);
			}
			else {
				jQuery('.msngr-close').on('click', function() {
					var item, id;
					item = jQuery(this);
					id = item.data('id');
					messenger.remove(id);
				});
			}
		}, 300);
	}

	remove(id) {
		jQuery('.msngr-'+id).removeClass('active');
		setTimeout(function() {
			jQuery('.msngr-'+id).remove();
		}, 300);
	}

}