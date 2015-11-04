 
;(function () {	
	   
 'use strict';
	 
var App = CMHA.App = (function () {
	  
		
	   /**
		App Class Initializing Object
	   */
		
	  function App($location){
		
		 this.location = $location;
		 this.data = [];
		 this.init();
	  }
	
	  App.prototype = {
		   
		  init : function () {
	         
			// SET UP ITEM OPTIONS EVENTS 
		    this.optionEvents();
			console.log( "HERE " );
			
		  },
		  
		  /**
		  DESCRIBE : 
	      */
		  optionEvents : function () {
			   
			  
			 var scope = this;

			 this.data = new CMHA.Data();
			 
			 this.fadeInIntroText();
			 $('.branding').fadeIn();
			 $('.loader').fadeOut(); 
			 $('.section li a').on('click',function () {
				 var t = $(this).parent().find('.data-block');
				 var li = $(this).parent();
				 var target = $(this).parent().attr('id');
				 var open = false; 
				 var id = $(this).parent().attr('id');
				 scope.loadData(id,scope.data.getData(id));
				 
				  
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
		  loadData : function (id,data) {
			  
			//console.log(div + " ::::::: " + target );  
			
			for(var i = 0; i < data.length; i++ ){
				var item = this.template(data[i]);
                $("#"+id).find('.data-block').append(item);
			}
			
			 // '<div class="item" ng-repeat="item in Abuse" ng-include="'partials/ServiceTemplate.html'"  repeat-done="layoutReady()"> </div>'; 
			  
		  },

		  template : function (item) {
             
              var tmp = '<h3>'+item.title+'</h3>'+
						'<p ng-if="item.ShortText">'+item.ShortText+'</p>'+
						'<div class="phone-number" ng-if="item.phone">'+
						'<div class="action-icon icon-call"><a href="tel:'+item.phone+'"><h5 class="tele">'+item.phone+'</h5></a></div>'+
						'</div>'+
						'<div class="phone-number">'+
						'<div class="action-icon icon-call"><a href="tel:'+item.tollFree+'"><h5 class="tele">'+item.tollFree+'</h5></a></div>'+
						'</div>'+
						'<div class="phone-number">'+
						'<div class="action-icon icon-call"><a href="tel:'+item.mobile+'"><h5 class="tele">'+item.mobile+'</h5></a></div>'+
						'</div>'+

						'<div class="phone-number">'+
						'<div class="action-icon icon-mail"><a href="mailto:'+item.email+'"><h5 class="tele">'+item.email+'</h5></a></div>'+
						'</div>'+

						'<div class="phone-number">'+
						'<div class="action-icon icon-site"><a href="http://'+item.website+'"><h5 class="tele">'+item.website+'</h5></a></div>'+
						'</div>';
               
               return tmp;

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