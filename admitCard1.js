function showDetails()
{
    var a;
    var htm =''
    var roll = rollno.value
    var stname = sname.value
    var ftname = fname.value
    var schl = schlname.value
    var daob = dob.value
    var gd = gender.value
    var hm = hmarks.value
    var em = emarks.value
    var pm = pmarks.value
    var cm = cmarks.value
    var mm = mmarks.value
    if(gender.value=='Male')
    {
        var m = 'Mast.'
        var d = 'S'
    }
    else if(gender.value=='Female')
    {
        var m = 'Miss.'
        var d = 'D'
    }
    var total = parseInt(hmarks.value) + parseInt(emarks.value) + parseInt(pmarks.value) + parseInt(cmarks.value) + parseInt(mmarks.value)
    var hrem=''
    var erem=''
    var prem=''
    var crem=''
    var mrem=''
    if(hmarks.value>=75)
    {
        hrem ="D"
    }
    else if(hmarks.value>=0 && hmarks.value<=35)
    {
        hrem = "*"
    }
    if(emarks.value>=75)
    {
        erem ="D"
    }
    else if(emarks.value>=0 && emarks.value<=35)
    {
        erem = "*"
    }
    if(pmarks.value>=75)
    {
        prem ="D"
    }
    else if(pmarks.value>=0 && pmarks.value<=35)
    {
        prem = "*"
    }
    if(cmarks.value>=75)
    {
        crem ="D"
    }
    else if(cmarks.value>=0 && cmarks.value<=35)
    {
        crem = "*"
    }
    if(mmarks.value>=75)
    {
        mrem ="D"
    }
    else if(mmarks.value>=0 && mmarks.value<=35)
    {
        mrem = "*"
    }

    htm +=`<table cellspacing =0 cellpadding=5 width = "60%" border = 1> `
    htm += `<tr><th><img src = 'cbselogo.jpg'></th><th>CENTRAL BOARD OF SECONDARY EDUCATION <br>Commited to equity and Excellence in Education</th></tr>`
    htm += `</table>`
    htm +=`<table cell spacing =0 cellpadding=5 width ="60%" border=1>`
    htm +=`<b><h3>${m} ${stname} <br><br> ${d}/O Shri. ${ftname}</h3></b>`
    htm +=`<b><h3>Roll no.: ${roll}</h3></b>`
    htm += `<b><h3>Date of Birth:${daob}</h3></b>`
    htm +=`<b><h3>School Name: ${schl}</h3></b>`
    htm += `</table>`
    
    htm += `<table cellspacing=0 cellpadding =5 width="60%" border =1`
    htm += `<tr><th>SubjectCode</th><th>Subject Name</th><th>MIN</th><th>MAX</th><th>Marks Obtained</th><th>Remarks</th></tr>`
    htm += `<tr><th>250401</th><th>Hindi</th></th><th>35</th><th>100</th><th>${hm}</th><th>${hrem}</th></tr>`
    htm += `<tr><th>250402</th><th>English</th></th><th>35</th><th>100</th><th>${em}</th><th>${erem}</th></tr>`
    htm += `<tr><th>250403</th><th>Physics</th></th><th>35</th><th>100</th><th>${pm}</th><th>${prem}</th></tr>`
    htm += `<tr><th>250404</th><th>Chemistry</th></th><th>35</th><th>100</th><th>${cm}</th><th>${crem}</th></tr>`
    htm += `<tr><th>250405</th><th>Maths</th></th><th>35</th><th>100</th><th>${mm}</th><th>${mrem}</th></tr>`
    htm += `<tr><th>Total:${total}/500</th></tr>`
    htm += `</table>`

    result.innerHTML = htm



}