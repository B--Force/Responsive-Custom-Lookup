$.fn.bLookup=function(e){function c(e,t){alert(e)}function h(e,t){u="";if(e.size>0){var n="";var i=e.getArray("records");for(var s=0;s<i.length;s++){var o='"'+i[s].Id+'"';if(r.sObject=="Case"){u=u+"<li id="+o+' class="list-group-item" style="cursor:pointer;">'+i[s].CaseNumber+"</li>"}else{u=u+"<li id="+o+' class="list-group-item" style="cursor:pointer;">'+i[s].Name+"</li>"}}}else{u="Sorry No Records Found"}}var t={sObject:"Account",sessionId:"session"};var n=$.extend({},t,e);var r=e;var i=$(this);var s=$("input",i);var o=$("span",i);var u="";var a="";var f={output:document.getElementById(i.id),startTime:(new Date).getTime()};var l={onSuccess:h,onFailure:c,source:f};if(r.sObject=="Case"){sforce.connection.query("Select Id, CaseNumber From "+r.sObject+" Limit 7",l)}else if(r.sObject=="User"){sforce.connection.query("Select Id, Name From "+r.sObject+" Where isActive = True Limit 7",l)}else{sforce.connection.query("Select Id, Name From "+r.sObject+" Limit 7",l)}s.click(function(){$("#blookupdlg").remove();var e='<div class="modal fade" id="blookupdlg">'+'<div class="modal-dialog">'+'<div class="modal-content">'+'<div class="modal-header bg-primary">'+'<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:red;"><span aria-hidden="true" style="color:red;">&times;</span></button>'+'<h4 class="modal-title" style="text-align:center;font-family: Segoe UI;">'+r.sObject+"&nbsp;Records</h4>"+"</div>"+' <div class="modal-body">'+'<input type="search" class="form-control" placeholder="Search  '+r.sObject+'" id="recSearch"/>'+'<ul id="resultlist" style="font-family: Segoe UI;" class="list-group">'+u+"</ul>"+"</div>"+' <div class="modal-footer">'+'<button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>'+"</div>"+"</div><!-- /.modal-content -->"+"</div><!-- /.modal-dialog -->"+"</div>";$("body").append(e);$("#resultlist li").click(function(){var e=s.attr("id");$("#"+o.attr("id")).html(this.id);$("#"+e).val($(this).html());$("#blookupdlg").modal("hide");$("#blookupdlg").remove()});$("#recSearch").on("change keyup paste mouseup",function(){if($(this).val()!=a){a=$(this).val();a="'"+a+"%'";if(a!=""){if(r.sObject=="Case"){sforce.connection.query("Select Id, CaseNumber From "+r.sObject+" where CaseNumber LIKE "+a+" Limit 7",l)}else if(r.sObject=="User"){sforce.connection.query("Select Id, Name From "+r.sObject+" where Name LIKE "+a+" and isActive = True Limit 7",l)}else{sforce.connection.query("Select Id, Name From "+r.sObject+" where Name LIKE "+a+" Limit 7",l)}}else{u=""}$("#resultlist").html();$("#resultlist").html(u);$("#resultlist li").click(function(){var e=s.attr("id");$("#"+o.attr("id")).html(this.id);$("#"+e).val($(this).html());$("#blookupdlg").modal("hide")})}});$("#blookupdlg").modal("show")})}
