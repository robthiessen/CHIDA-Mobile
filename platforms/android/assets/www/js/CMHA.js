 
;(function () {	
	   
 'use strict';
	 
var App = CMHA.App = (function () {
	  
		
	   /**
		App Class Initializing Object
	   */
		
	  function App($location){
		
		 this.location = $location;
		 this.init();
	  }
	
	  App.prototype = {
		   
		  init : function () {
	         
			// SET UP ITEM OPTIONS EVENTS 
		    this.optionEvents();
			
			
		  },
		  
		  /**
		  DESCRIBE : 
	      */
		  optionEvents : function () {
			  
			 /* if (window.navigator.standalone === false) {
				  alert("this App can be saved to your home screen.");
			  }
			  */
			  
			 var scope = this;
			 
			 this.fadeInIntroText();
			 $('.branding').fadeIn();
			 $('.loader').fadeOut(); 
			 $('.section li a').on('click',function () {
				 var t = $(this).parent().find('.data-block');
				 var li = $(this).parent();
				 var target = $(this).parent().attr('id');
				 var open = false; 
				 
				 scope.addData(t,target);
				 $('.data-block').slideUp(299);
			     $('.section li').css({'border-width':'2px'});
				 
				 if($( this ).hasClass( "open" )){
					 $( this ).addClass( "closed" );
					 $( this ).removeClass( "open" );
					 open = false; 
				 }else{
					 $( this ).removeClass( "closed" );
					 $( this ).addClass( "open" );
					 open = true;
				 }
				 
				 if(open){
					 setTimeout(function ( ){
                     $(t).slideDown();
				     $(li).css({'border-width':'0px'});
					 
					 $('html, body').animate({ scrollTop: $('#'+target).offset().top  }, 1000);
					 
					 },300);
				 }
				  
			 });
			 
			 $('.deeplink').on('click',function (e) {
				 e.preventDefault();
				 var target = $(this).attr('href');
				 $('.data-block').hide();
				 $(target).find('.data-block').slideDown();
				 $('html, body').animate({ scrollTop: $(target).offset().top  }, 1000);
			 });
			 
			 $('.deeplink-no-open').on('click',function (e) {
				 e.preventDefault();
				 var target = $(this).attr('href');
				 $('.data-block').hide();
				 $('html, body').animate({ scrollTop: $(target).offset().top  }, 1000);
			 });
			 
			 
		  },
		  
		  
		  /**
		  Description : 
		  */
		  addData : function (div,target) {
			  
			console.log(div + " ::::::: " + target );  
			
			
			
			 // '<div class="item" ng-repeat="item in Abuse" ng-include="'partials/ServiceTemplate.html'"  repeat-done="layoutReady()"> </div>'; 
			  
		  },
		  
		  
		  /**
		  Description : 
		  */
		  fadeInIntroText : function () {
			  
			  var timer = {};
			  timer = setTimeout(function (){
				  $('.intro-info-screen').fadeIn(800);
				  clearTimeout(timer);
			  },3500);
			   
		  },
		  
		  /**
		  Description : 
		  */
		  SetFetured : function () {
			 
			 $('.item-featured').each(function () {
				 var p = $(this).parent();
				 $(p).css({'background-color':'#c5e7e7',"border-bottom-style":"solid","border-color":"#00b1b0", "border-width":"2px"});
			 });
			  
		  }
		  
	}
	  
   return App;	
	
})();


}).call(this);