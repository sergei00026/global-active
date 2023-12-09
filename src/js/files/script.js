// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const fileInput = document.querySelector('.callback__down');
const fileName = document.querySelector('.callback__nameFile');
function handleFileChange() {

   function formatFileName(filename) {
      if (filename.length > 10) {
         return filename.slice(0, 9) + '...' + filename.slice(-4);
      } else {
         if (!filename.split('').find(str=>str==='.')) {
            return filename.slice(0, 9) + '...';
         }
      }
   }

   // Получить выбранный файл
   const file = fileInput.files[0];

   // Отобразить название файла с расширением
   fileName.textContent = file.name;
}

fileInput.addEventListener('change',handleFileChange)