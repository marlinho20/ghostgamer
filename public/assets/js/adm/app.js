$((function(){var e=$("#menu-aside");$("#btn-menu").on("click",(function(){e.addClass("active"),e.one("mouseleave",(function(){e.removeClass("active")}))}))})),$("#form-post-search").submit((function(e){e.preventDefault();var t=$(this),i=$(".ajax_load");t.ajaxSubmit({url:t.attr("action"),type:"POST",dataType:"json",beforeSend:function(){i.fadeIn(200).css("display","flex")},success:function(e){e.redirect?window.location.href=e.redirect:i.fadeOut(200)},error:function(e){i.fadeOut(200)}})})),tinyMCE.init({selector:"textarea.mce",language:"pt_BR",menubar:!1,theme:"modern",height:132,skin:"light",entity_encoding:"raw",theme_advanced_resizing:!0,plugins:["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker","searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking","save table contextmenu directionality emoticons template paste textcolor media"],toolbar:"styleselect | pastetext | removeformat |  bold | italic | underline | strikethrough | bullist | numlist | alignleft | aligncenter | alignright |  link | unlink | fsphpimage | code | fullscreen",style_formats:[{title:"Normal",block:"p"},{title:"Titulo 1",block:"h2"},{title:"Titulo 2",block:"h3"},{title:"Titulo 3",block:"h4"},{title:"Titulo 4",block:"h5"},{title:"Código",block:"pre",classes:"brush: php;"}],link_class_list:[{title:"None",value:""},{title:"Blue CTA",value:"btn btn_cta_blue"},{title:"Green CTA",value:"btn btn_cta_green"},{title:"Yellow CTA",value:"btn btn_cta_yellow"},{title:"Red CTA",value:"btn btn_cta_red"}],setup:function(e){e.addButton("fsphpimage",{title:"Enviar Imagem",icon:"image",onclick:function(){$(".mce_upload").fadeIn(200,(function(e){$("body").click((function(e){"mce_upload"===$(e.target).attr("class")&&$(".mce_upload").fadeOut(200)}))})).css("display","flex")}})},link_title:!1,target_list:!1,theme_advanced_blockformats:"h1,h2,h3,h4,h5,p,pre",media_dimensions:!1,media_poster:!1,media_alt_source:!1,media_embed:!1,extended_valid_elements:"a[href|target=_blank|rel|class]",imagemanager_insert_template:'<img src="{$url}" title="{$title}" alt="{$title}" />',image_dimensions:!1,relative_urls:!1,remove_script_host:!1,paste_as_text:!0}),$(".app_form").submit((function(e){e.preventDefault();var t=$(this),i=$(".ajax_load");"undefined"!=typeof tinyMCE&&tinyMCE.triggerSave(),t.ajaxSubmit({url:t.attr("action"),type:"POST",dataType:"json",beforeSend:function(){$(".mce_response").html(""),i.fadeIn(200).css("display","flex")},success:function(e){e.mce_image&&($(".mce_upload").fadeOut(200),tinyMCE.activeEditor.insertContent(e.mce_image),t.find("input[type='file']").val(null),i.fadeOut(200))},complete:function(){!0===t.data("reset")&&t.trigger("reset")},error:function(e){e.responseJSON.errors&&($(".mce_response").html("Arquivo foi invalido").effect("bounce"),i.fadeOut(200))}})}));