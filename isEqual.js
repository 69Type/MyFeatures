/* Функция сложных объектов */
function isEqual(a, b) {
	/* перебор ключей в объекте */
	for (key in a) {
		/* сравнение типов */
		if (typeof a[key] == typeof b[key]) {
			/* провекра существования ключа в объекте B */
			if (!(key in b)) {
				return false;
			}
			/* провекра поля на объект */
			if (typeof a[key] == "object") {
				/* сравнение под-объектов */
				if (!isEqual(a[key], b[key])) {
					return false;
				}
			} else {
				/* сравнение примитивных данных полей */
				if (a[key] != b[key]) {
					return false;
				}
			}
		} else {
			return false;
		}
	}
	return true;
}
