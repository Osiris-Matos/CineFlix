const { Builder, By, Key } = require('selenium-webdriver');

(async function openpage() {
  // Configuramos el controlador del navegador ChromeDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Abrimos la página web
    await driver.get('http://localhost:5173/');
  
    // Ejemplo de interacción con la página
    await new Promise(resolve => setTimeout(resolve, 10000));
    let searchBox = await driver.findElement(By.id('input'));
    await searchBox.sendKeys('venom', Key.RETURN);

    await new Promise(resolve => setTimeout(resolve, 5000));

    let checkboxElement = await driver.findElement(By.id('checkbox'));

    //Esta parte marca el checkbox
    let isChecked = await checkboxElement.isSelected();
    console.log('El checkbox está seleccionado:', isChecked);

    if (!isChecked) {
      await checkboxElement.click();
      console.log('Checkbox marcado como seleccionado.');
    } else {
      console.log('El checkbox ya está seleccionado.');
    }

    await new Promise(resolve => setTimeout(resolve, 5000));

    if (!isChecked) {
      await checkboxElement.click();
      console.log('Checkbox desmarcado como seleccionado.');
    } else {
      console.log('El checkbox no estaba seleccionado.');
    }

    await new Promise(resolve => setTimeout(resolve, 10000));

    // Eliminamos el texto escrito

    let inputElement = await driver.findElement(By.id('input'));
    await inputElement.clear();

    //Buscamos otra pelicula
    searchBox = await driver.findElement(By.id('input'));
    await searchBox.sendKeys('dragon ball', Key.RETURN);

    await new Promise(resolve => setTimeout(resolve, 5000));

    checkboxElement = await driver.findElement(By.id('checkbox'));

    //Esta parte marca el checkbox
    isChecked = await checkboxElement.isSelected();
    console.log('El checkbox está seleccionado:', isChecked);

    if (!isChecked) {
      await checkboxElement.click();
      console.log('Checkbox marcado como seleccionado.');
    } else {
      console.log('El checkbox ya está seleccionado.');
    }

    await new Promise(resolve => setTimeout(resolve, 5000));

    if (!isChecked) {
      await checkboxElement.click();
      console.log('Checkbox desmarcado como seleccionado.');
    } else {
      console.log('El checkbox no estaba seleccionado.');
    }

  } finally {

    // Cerramos el navegador al finalizar
    
  }
})();

