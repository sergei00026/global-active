// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

const fileInput = document.querySelector('.callback__down')
const fileName = document.querySelector('.callback__nameFile')
function handleFileChange() {
	function formatFileName(filename) {
		if (filename.length > 10) {
			return filename.slice(0, 9) + '...' + filename.slice(-4)
		} else {
			if (!filename.split('').find((str) => str === '.')) {
				return filename.slice(0, 9) + '...'
			}
		}
	}

	// Получить выбранный файл
	const file = fileInput.files[0]

	// Отобразить название файла с расширением
	fileName.textContent = file.name
}

fileInput.addEventListener('change', handleFileChange)

const fileInput2 = document.querySelector('.callback__down2')
const fileName2 = document.querySelector('.callback__nameFile2')
function handleFileChange2() {
	function formatFileName(filename) {
		if (filename.length > 10) {
			return filename.slice(0, 9) + '...' + filename.slice(-4)
		} else {
			if (!filename.split('').find((str) => str === '.')) {
				return filename.slice(0, 9) + '...'
			}
		}
	}

	// Получить выбранный файл
	const file = fileInput2.files[0]

	// Отобразить название файла с расширением
	fileName2.textContent = file.name
}

fileInput2.addEventListener('change', handleFileChange2)
