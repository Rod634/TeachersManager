const fs = require("fs");
const data = require("./data.json");

exports.show = function(req, res){
    const id = req.params.index;

    let findteacher = data.teachers.find(function(teacher){
        return teacher.id == id;
    })

    const teacher = {
        ...findteacher,
        knowledge: findteacher.knowledge.split(",")
    }

    if(!findteacher){
        return res.send("Teacher not found");
    }else{
        return res.render("teachers/show", {teacher});
    }

}

exports.post = function(req, res) {

    const keys = Object.keys(req.body);

    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Fill all places");
        }
    }

    let { avatar_url, name, birth, gender, education_level, class_type, knowledge } = req.body;
    let id = Number(data.teachers.length + 1);
    birth = Date.parse(req.body.birth);
    let since = Date.now();


    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        education_level,
        class_type,
        knowledge,
        since
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Ops! file data error, try later");
        }
         return res.rendirect("/teachers");
    })

   
}