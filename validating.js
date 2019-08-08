
		var email;
		function validateEmail(email) {
    		
    		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		
    		return re.test(String(email).toLowerCase());
    		//alert(re.test(String(email).toLowerCase()));
		}
		var phone;
		function validatePhone(phone) {
    		//var ra =/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}/;
    		var ra = /(7|8|9)\d{9}/;
    		return ra.test(String(phone).toLowerCase());
    		
		}

		$(".textValidation").each(function(){
				if(this.val()==''){
					$(this).parent().children(':last-child').html("Fill this box first");
				}
				else
					$(this).parent().children(':last-child').html("");
		});
		function myName(name) {
  			var patt1 = new RegExp("/^[a-z ,.'-]+$/i") ;

  			
  			return patt1.test(String(name).toLowerCase());
		}