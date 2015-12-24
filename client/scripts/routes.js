angular
  .module('whatsapp')
  .config(config);

  function config($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('tab',{
        url:'/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.chats',{
        url:'/chats',
        views:{
          'tab-chats':{
            templateUrl: 'client/templates/chats.html',
            controller: 'ChatsCtrl as vm'
          }
        }
      })
      .state('tab.chat',{
          url:'/chats/:chatId',
          views:{
            'tab-chats':{
              templateUrl:'client/templates/chat.html',
              controller: 'ChatCtrl as vm'
            }
          }
      });
      $urlRouterProvider.otherwise('tab/chats');
  }
