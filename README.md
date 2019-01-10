# Qiwi Checkout Popup

## Установка и подключение

```html
<script src='https://oplata.qiwi.com/popup/v1.js'></script>
```

## Параметры

В библиотеке доступны 2 функции `QiwiCheckout.openInvoice` и `QiwiCheckout.createInvoice`.

### Открытие инвойса

Параметры `QiwiCheckout.openInvoice`

| Параметр | Описание | Тип | Обязательное |
|-|-|-|-|
| payUrl | URL инвойса | String | + |

### Создание инвойса

Для создания счета рекомендуется использовать API ([Документация](https://developer.qiwi.com/ru/bill-payments/#create))

Параметры `QiwiCheckout.createInvoice`

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

## Примеры

### Открытие инвойса

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