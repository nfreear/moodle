(function(){tinymce.PluginManager.requireLangPack('moodlenolink');tinymce.create('tinymce.plugins.moodlenolinkPlugin',{init:function(ed,url){ed.addCommand('mcemoodlenolink',function(){var n,p;n=ed.selection.getNode();p=ed.dom.getParent(n,function(t){return ed.dom.getAttrib(t,'class')=='nolink'});if(p){ed.dom.remove(p,true)}else{ed.selection.setContent('<span class="nolink">'+ed.selection.getContent()+'</span>')}});ed.addButton('moodlenolink',{title:'moodlenolink.desc',cmd:'mcemoodlenolink',image:url+'/img/ed_nolink.gif'});ed.onNodeChange.add(function(ed,cm,n){var p,c;c=cm.get('moodlenolink');p=ed.dom.getParent(n,'SPAN');c.setActive(p&&ed.dom.hasClass(p,'nolink'));if(p&&ed.dom.hasClass(p,'nolink')||ed.selection.getContent()){c.setDisabled(false)}else{c.setDisabled(true)}})},getInfo:function(){return{longname:'moodlenolink plugin',author:'Some author',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/moodlenolink',version:"1.0"}}});tinymce.PluginManager.add('moodlenolink',tinymce.plugins.moodlenolinkPlugin)})();