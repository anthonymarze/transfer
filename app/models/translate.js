import Model from '@ember-data/model';

export default class TranslateModel extends Model {
    $window.on('load', function() {
        $(':lang(en)').hide();

        $('#lang-en').click(function () {
            $(':lang(jp)').hide();
            $(':lang(en)').show();
            $('#name').attr('placeholder', 'Name');
            $('#email').attr('placeholder', 'Email');
            $('#message').attr('placeholder', 'Message');
            $('#sendMessage').attr('value', 'Send Message');
            $('#clearForm').attr('value', 'Clear Form');
        });

        $('#lang-jp').click(function () {
            $(':lang(en)').hide();
            $(':lang(jp)').show();
            $('#name').attr('placeholder', '名前');
            $('#email').attr('placeholder', '電子メールアドレス');
            $('#message').attr('placeholder', 'メッセージ');
            $('#sendMessage').attr('value', 'メッセージを送る');
            $('#clearForm').attr('value', '明確な申請書');
        });

        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });
}