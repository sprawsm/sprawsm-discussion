$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>50&&$(".hero").addClass("scrolled")}),$(window).scroll(function(){$(this).scrollTop()<50&&$(".hero").removeClass("scrolled")}),$("a").each(function(){var o=new RegExp("/"+window.location.host+"/");o.test(this.href)||$(this).click(function(o){o.preventDefault(),o.stopPropagation(),window.open(this.href,"_blank")})})});