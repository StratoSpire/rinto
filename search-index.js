var searchIndex = {};
searchIndex["porteurbars"] = {"doc":"Porteurbars is a tool for sharing portable git hosted project templates","items":[[3,"Error","porteurbars","The Error type.",null,null],[12,"0","","The kind of the error.",0,null],[3,"Template","","A template holds a path to template source and a file describing the default values associated with names used in the template",null,null],[12,"path","","path to template source",1,null],[0,"git","","",null,null],[4,"Url","porteurbars::git","",null,null],[13,"Local","","",2,null],[13,"Github","","",2,null],[13,"Remote","","",2,null],[5,"clone","","clone a repository at a rev to a directory a best attempt effort is made to authenticate requests when required to support private git repositories",null,{"inputs":[{"name":"url"},{"name":"p"},{"name":"r"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"url"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"url"}],"output":{"name":"bool"}}],[11,"from_str","","supports two types git of repository urls local repositories that start with file:// and github repositories ower/repo",2,{"inputs":[{"name":"str"}],"output":{"generics":["url"],"name":"result"}}],[11,"fmt","porteurbars","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",0,null],[11,"with_chain","","",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",0,null],[11,"iter","","",0,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"chain_err","","",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"backtrace","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"extract_backtrace","","",0,{"inputs":[{"name":"error"}],"output":{"generics":["arc"],"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",0,{"inputs":[{"generics":["error"],"name":"box"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",0,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",0,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",0,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"chain_err","","Extends the error chain with a new entry.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"error"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"rendererror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"templateerror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"templaterendererror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",1,{"inputs":[{"name":"p"}],"output":{"name":"template"}}],[11,"apply","","Apply template",1,{"inputs":[{"name":"self"},{"name":"p"},{"name":"option"},{"name":"bool"},{"name":"bool"}],"output":{"name":"result"}}],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",3,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["error"],"name":"result"}}]],"paths":[[3,"Error"],[3,"Template"],[4,"Url"],[8,"ResultExt"]]};
initSearch(searchIndex);
