function checkall(objForm)
{
var ele,len,i;
ele= document.getElementsByTagName("input");
len=ele.length;
for(i=0;i<len;i++){
if(ele[i].type=='checkbox'){
		ele[i].checked=objForm;
		}
	}
	
}