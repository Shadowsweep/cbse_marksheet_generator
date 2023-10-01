function table1()
{
    var htm =''
    htm +=`<table cellspacing =0 cellpadding=5 width = "80%" border = 1> `
    htm += `<tr><th><img src = 'cbselogo.jpg'></th><th>CENTRAL BOARD OF SECONDARY EDUCATION <br>Commited to equity and Excellence in Education</th>`
    htm += `</table>`
}
function table2()
{    
    if(gender.value=='Male')
    {
        var m = 'Mast'
        var d = 'S'
    }
    elseif(gender.value=='Female')
    {
        var m = 'Miss'
        var d = 'D'
    }
    var htm =''
    htm +=`<table cell spacing =0 cellpadding=5 width ="80%" border=1>`
    htm +=`<table cell spacing =0 cellpadding=5 width ="80%" border=1>`
    htm +=`<th><tr>${m} ${stname} ${d}/O Shri. ${ftname}</tr></th>`
    htm +=`</table>`
    htm +=`<table cell spacing =0 cell padding=5 width ="80%" border=1>`
    htm +=`<th><tr>Roll no.: ${roll}</th><th>DOB: ${daob}</tr></th>`
    htm +=`</table`
}

function table3()
{   var total = parseInt(hmarks.value) + parseInt(emarks.value) + parseInt(pmarks.value) + parseInt(cmarks.value) + parseInt(mmarks.value)
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

    htm = ''
    htm += `<table cellspacing=0 cellpadding =5 width="80%" border =1`
    htm += `<tr><th>SubjectCode</th><th>Subject Name</th><th>MIN</th><th>MAX</th><th>Marks Obtained</th><th>Remarks</th></tr>`
    htm += `</table>`
    htm += `<table cellspacing =0 cellpadding=5 width = "80%" border = 1 `
    htm += `<tr><th>250401</th><th>Hindi</th></th><th>35</th><th>100</th><th>75</th><th>hrem</th></tr>`
    htm += `</table>`
    htm += `<table cellspacing =0 cellpadding=5 width = "80%" border = 1 `
    htm += `<tr><th>250402</th><th>English</th></th><th>35</th><th>100</th><th>34</th><th>erem</th></tr>`
    htm += `</table>`
    htm += `<table cellspacing =0 cellpadding=5 width = "80%" border = 1 `
    htm += `<tr><th>250403</th><th>Physics</th></th><th>35</th><th>100</th><th>76</th><th>prem</th></tr>`
    htm += `</table>`
    htm += `<table cellspacing =0 cellpadding=5 width = "80%" border = 1 `
    htm += `<tr><th>250404</th><th>Chemistry</th></th><th>35</th><th>100</th><th>88</th><th>crem</th></tr>`
    htm += `</table>`
    htm += `<table cellspacing =0 cellpadding=5 width = "80%" border = 1 `
    htm += `<tr><th>250405</th><th>Maths</th></th><th>35</th><th>100</th><th>75</th><th>mrem</th></tr>`
    htm += `</table>`





}