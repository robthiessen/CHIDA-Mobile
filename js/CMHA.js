 
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
			 $('.section li a').on('click',function (e) {
			 	 e.preventDefault();
				 var t = $(this).parent().find('.data-block');
				 var li = $(this).parent();
				 var target = $(this).parent().attr('id');
				 var open = false; 
				 var id = $(this).parent().attr('id');

				 if(!$(this).hasClass('founders')){
				 	scope.loadData(id,scope.data.getData(id));
				 }
				  
				 $('.data-block').slideUp(299);
			     $('.section li').css({'border-width':'2px'});
				 
				 if($( this ).hasClass( "open" )){
					 $( this ).addClass( "closed" );
					 $(this).find('.arrow img').attr('src','img/arrow-down.png');
					 $( this ).removeClass( "open" );
					 open = false; 
				 }else{
					 $( this ).removeClass( "closed" );
					 $( this ).addClass( "open" );
					 $(this).find('.arrow img').attr('src','img/arrow-up.png');
					 open = true;
				 }
				 
				 if(open){
				 	 $(t).slideDown();
				     $(li).css({'border-width':'0px'});
					 setTimeout(function ( ){
					 $('html, body').animate({ scrollTop: $('#'+target).offset().top  }, 1000);
					 },300);
				 }
				  
			 });
			 
			 $('.deeplink').on('click',function (e) {
				 e.preventDefault();
				 var target = $(this).attr('href');
				 $('.data-block').hide();
				 $(target).find('.data-block').slideDown();
				 setTimeout(function ( ){
				 $('html, body').animate({ scrollTop: $(target).offset().top  }, 1000);
				 },300);
			 });
			 
			 $('.deeplink-no-open').on('click',function (e) {
				 e.preventDefault();
				 var target = $(this).attr('href');
				 $('.data-block').hide();
				 setTimeout(function ( ){
				 $('html, body').animate({ scrollTop: $(target).offset().top  }, 1000);
				 },300);
			 });
			 
			 
		  },
		  
		  
		  /**
		  Description : 
		  */
		  loadData : function (id,data) {
			  
			console.log(id );  
			 $("#"+id).find('.data-block').html('');
			for(var i = 0; i < data.length; i++ ){
				var item = this.template(data[i]);
                $("#"+id).find('.data-block').append(item);
			}
			
			this.SetFetured();
			 
		  },

		  template : function (item) {
              
              var tmp = '<div class="item"><h3>'+item.title+'</h3>';
              console.log(item.category + " :: >> " + item.title);

              if(item.featured){
              	tmp += '<div class="item-featured"></div>';
              }

              if(item.ShortText){
              tmp += '<p>'+item.ShortText+'</p>';
              }

              if(item.phone){
              tmp += '<div class="phone-number">'+
					 '<div class="action-icon icon-call"><a href="tel:'+item.phone+'"><h5 class="tele">'+item.phone+'</h5></a></div>'+
					 '</div>';
              }

              if(item.tollFree){
              tmp += '<div class="phone-number">'+
					 '<div class="action-icon icon-call"><a href="tel:'+item.tollFree+'"><h5 class="tele">'+item.tollFree+'</h5></a></div>'+
					 '</div>';
              }

              if(item.mobile){
              tmp += '<div class="phone-number">'+
					 '<div class="action-icon icon-call"><a href="tel:'+item.mobile+'"><h5 class="tele">'+item.mobile+'</h5></a></div>'+
					 '</div>';
              }

              if(item.email){
              tmp += '<div class="phone-number">'+
					 '<div class="action-icon icon-mail"><a href="mailto:'+item.email+'"><h5 class="tele">'+item.email+'</h5></a></div>'+
					 '</div>';
              }

              if(item.website){
              tmp += '<div class="phone-number">'+
					 '<div class="action-icon icon-site"><a href="http://'+item.website+'"><h5 class="tele">'+item.website+'</h5></a></div>'+
					 '</div>';
              }
              tmp += '</div>';

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