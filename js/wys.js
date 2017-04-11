var json={
	radioLable:$('.form-list .radio'),
	appointINodes:$('.appoint-list i'),
	restList:$('.rest-list li'),
	restInfoNode:$('.rest-info'),
	packageItems:$('.package-item'),
	packageDelNode:$('.del'),
	toolList:$('.tool-list li'),
	toolINodes:$('.tool-list i'),
	toolH3Nodes:$('.tool-list h3'),
	quesRadioNode:$('.op .radio'),
	radioFun:function(){
		var that=this;
		that.radioLable.click(function(){
			if($(this).children('.radio-check').hasClass('current')){
				return;
			}
			else{
				$(this).children('.radio-check').addClass('current');
				$(this).siblings('.radio').children('.radio-check').removeClass('current');
				$(this).children('input').val('1');
				$(this).siblings('.radio').children('input').val('0');
			}
		})
	},
	imgDraw:function(obj,x,y){//图标自动从图片精灵里按顺序排列
		for(var i in obj){
			if(x!=0)
            	obj.eq(i).css({backgroundPositionX:-i*x+"rem"});
            if(y!=0)
            	obj.eq(i).css({backgroundPositionY:-i*y+"rem"});
        }
	},
	wysImgDraw:function(){
		this.imgDraw(this.appointINodes,0,0.6);//userAppoint
		this.imgDraw(this.toolINodes,0,1);//testTool
	},
	packageDelFun:function(){
		var that=this;
		that.packageDelNode.click(function(){
			$(this).parent('.package-item').hide();
			$(this).parents('.rest-info').hide();
		})
	},
	restListClick:function(){
		var that=this;
		that.restList.click(function(e){
			var target= e.target;
			if(target.tagName.toLowerCase()=='button'){
				that.restInfoNode.show();
				that.packageItems.eq($(this).index()).show();
				return;
			}
			if($(this).hasClass('current')){
				$(this).removeClass();
			}
			else{
				$(this).addClass('current');
				$(this).siblings('.current').removeClass();
			}
		})
	},
//	colDraw:function(obj,colArr,attribute){
//		for(var i in obj){
//			switch(attribute){
//				case color:
//					obj.eq(i).css({color:colArr[i]});
//					break;
//				case borderColor:
//					obj.eq(i).css({borderColor:colArr[i]});
//					break;
//			}
//			
//		}
//	},
	toolColor:function(){
		var colorArr=['#f14f4f','#f3b613','#4f8cf1','#31c249','#f18c4f'];
		for(var i in this.toolList){
			this.toolList.eq(i).css({borderColor:colorArr[i]});
		}
		for(var i in this.toolH3Nodes){
			this.toolH3Nodes.eq(i).css({color:colorArr[i]});
		}
//		this.colDraw(this.toolList,colorArr,borderColor);
//		this.colDraw(this.toolH3Nodes,colorArr,color);
    },
    quesRadioClick:function(){
    	var that=this;
    	that.quesRadioNode.click(function(){
    		if($(this).hasClass('current')){
    			return;
    		}
    		else{
    			$(this).addClass('current');
    			$(this).siblings('.current').removeClass('current');
    		}
    	})
    },
	initFun:function(){
		this.radioFun();
		this.wysImgDraw();
		this.packageDelFun();
		this.restListClick();
		this.toolColor();
		this.quesRadioClick();
	}
	
}
json.initFun();








