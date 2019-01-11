# Qiwi Checkout Popup

## Установка и подключение

```html
<script src='https://oplata.qiwi.com/popup/v1.js'></script>
```

## Методы

В библиотеке доступны 2 функции: `QiwiCheckout.openInvoice` и `QiwiCheckout.createInvoice`.

В случае успешной оплаты Promise resolve-ится с параметрами с которыми был создан счет, иначе reject-ится с причиной из-за которой оплата была прервана.

В случае ошибки при оплате: `{reason: "PAYMENT_FAILED"}`

В случае закрытия попапа: `{reason: "POPUP_CLOSED"}`

Через 2 секунды после совершения оплаты или ошибки форма оплаты закрывается.

```js
QiwiCheckout.createInvoice({
    publicKey: '5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******',
    amount: 1.23,
    phone: '79123456789',
})
    .then(data => {
        //  data === {
        //    publicKey: '5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******',
        //    amount: 1.23,
        //    phone: '79123456789',
        //  }
    })
    .catch(error => {
        //  error === {
        //      reason: "PAYMENT_FAILED"
        //  }
    })
```

Для отслеживания оплаты счета рекомендуется использовать server2server уведомления ([Документация](https://developer.qiwi.com/ru/bill-payments/#notification))

### Открытие инвойса

Открытие счета используется вместе с выставлением счета по API ([Документация](https://developer.qiwi.com/ru/bill-payments/#create))

Метод `QiwiCheckout.openInvoice` открывает платежную форму. В параметрах нужно указать: 

| Параметр | Описание | Тип | Обязательное |
|-|-|-|-|
| payUrl | URL инвойса | String | + |

```javascript
params = {
    payUrl: 'https://oplata.qiwi.com/form?invoiceUid=06df838c-0f86-4be3-aced-a950c244b5b1'
}

QiwiCheckout.openInvoice(params)
    .then(data => {
        // ...
    })
    .catch(error => {
        // ...
    })
```

### Создание инвойса

Для создания счета рекомендуется использовать API ([Документация](https://developer.qiwi.com/ru/bill-payments/#create))

Метод `QiwiCheckout.createInvoice` выставляет новый счет и открывает платежную форму с этим счетом. Доступные параметры:

| Параметр | Описание | Тип | Обязательное |
|-|-|-|-|
| publicKey | Ключ идентификации мерчанта, полученный в QIWI Кассе | String | + |
| amount | Сумма, на которую выставляется счет, округленная в меньшую сторону до 2 десятичных знаков | Number(6.2) | + |
| phone | Номер телефона пользователя, на который выставляется счет (в международном формате) | String | - |
| email | E-mail пользователя, куда будет отправлена ссылка для оплаты счета | String | - |
|  account | Идентификатор пользователя в системе мерчанта | String | - |
| comment | Комментарий к счету | String(255) | - |
| customFields | Дополнительные данные счета | Object | - |
| lifetime | Дата, до которой счет будет доступен для оплаты. Если счет не будет оплачен до этой даты, ему присваивается финальный статус EXPIRED и последующая оплата станет невозможна.| Number (unix timestamp) | - |

```javascript
params = {
    publicKey: '5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******',
    amount: 1.23,

    phone: '79123456789',
    email: 'test@test.com',
    account: 'acc789',
    comment: 'Оплата',
    customFields: {
        data: 'data'
    },
    lifetime: '2019-04-04T1540'
}

QiwiCheckout.createInvoice(params)
    .then(data => {
        // ...
    })
    .catch(error => {
        // ...
    })
```