``` bash

$ git clone https://github.com/linghart/flickr-test.git

$ cd flickr-test
$ composer install

!!! configure the .env file to work correctly with the database !!!

$ php artisan migrate
$ php artisan seed

$ php artisan jwt:secret

$ php artisan serve

```

Username: admin@admin.com
Passord: admin
