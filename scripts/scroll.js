function slide()
{
	jQuery.fn.extend(
	{
		scrollTo: function (speed, easing) 
		{
			return this.each(function () 
			{
				var targetOffset = $(this).offset().top;
				$('html,body').animate({ scrollTop: targetOffset }, speed, easing);
			});
		}
	});
}

function slide1()
{
	slide();

	$('#nav').scrollTo(500);
}

function slide2()
{
	slide();

	$('#News').scrollTo(600);
}

function slide3()
{
	slide();

	$('#About').scrollTo(800);
}

function slide4()
{
	slide();

	$('#Team').scrollTo(1000);
}