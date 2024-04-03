function tabuada() {
    var numtab = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (numtab.value.length == 0) {
        window.alert('A Tabuada de 0 é zero!')
    } else {
        var n = Number(numtab.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) { 
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}