const selectMonthEl = document.querySelector('#month') 
const selectYearEl = document.querySelector('#year') 

const currentDate = new Date()
const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 
                'Maj', 'Czerwiec', 'Lipiec', 'Sierpień',
                'Wrzesień', 'Październik', 'Listopad', 'Grudzień' ]

const init = () => {
    // Fill the months 
    for (let i=0; i< months.length; i++) {
        let optionEl = document.createElement('option')
        optionEl.value = optionEl.text = months[i]
        selectMonthEl.options.add(optionEl)
    }
    // Set current data
    selectMonthEl.value = months[currentDate.getMonth()]
    selectYearEl.value = currentDate.getFullYear()
    
    // Add event listeners
    selectMonthEl.addEventListener('change', redrawCalendar );
    selectYearEl.addEventListener('change', redrawCalendar );
}

const redrawCalendar = () => {
    console.log(selectMonthEl.selectedIndex)
    console.log(selectYearEl.value)
}


init()


// bootstrap pola




/* 
<select name="months">
    <option value="sty">Stycz</option>
    <option value="lut">Lut</option>
    <option value="marz">Marz</option>
</select> 
*/