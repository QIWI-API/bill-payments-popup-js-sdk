# Qiwi Checkout Popup

## Установка и подключение

```html
<script src='https://oplata.qiwi.com/popup/v1.js'></script>
```

## Методы

В библиотеке доступны 2 функции: `QiwiCheckout.openInvoice` и `QiwiCheckout.openPreorder`.

В случае успешной оплаты Promise resolve-ится с параметрами с которыми был создан счет, иначе reject-ится с причиной из-за которой оплата была прервана.

В случае ошибки при оплате: `{reason: "PAYMENT_FAILED"}`

В случае закрытия попапа: `{reason: "POPUP_CLOSED"}`

Через 2 секунды после совершения оплаты форма оплаты закрывается.

```js
QiwiCheckout.openInvoice({
    payUrl: 'https://oplata.qiwi.com/form?invoiceUid=06df838c-0f86-4be3-aced-a950c244b5b1'
})
    .then(data => {
        //  data === {
        //    payUrl: 'https://oplata.qiwi.com/form?invoiceUid=06df838c-0f86-4be3-aced-a950c244b5b1'
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

### Открытие my.qiwi.com

Метод `QiwiCheckout.openPreorder` открывает my.qiwi.com. В параметрах нужно указать: 

| Параметр | Описание | Тип | Обязательное |
|-|-|-|-|
| widgetAlias | Алиас виджета | String | + |
