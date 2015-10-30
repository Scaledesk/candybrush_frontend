angular.module('CandyBrush').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/packages'
    })

    .when('/notes', {
      templateUrl: "assets/templates/notes/index.html",
      controller: "NotesIndexController"
    })
      .when('/login', {
      templateUrl: "assets/templates/authentication/login.html",
      controller: "AuthenticationController"
    })
      .when('/profile', {
        templateUrl: "assets/templates/users/profile.html",
        controller: "UsersProfileController"
      })
      .when('/add_portfolio', {
        templateUrl: "assets/templates/users/add_portfolio.html",
        controller: "PortfolioController"
      })
      .when('/uploadProfileImage', {
        templateUrl: "assets/templates/users/uploadImage.html",
        controller: "UsersProfileController"
      })

      .when('/signup', {
        templateUrl: "assets/templates/users/register.html",
        controller: "RegistrationController"
      })
      .when('/packages', {
        templateUrl: "assets/templates/packages/index.html",
        controller: "PackageController"
      })
      .when('/booking/:id', {
        templateUrl: "assets/templates/packages/booking.html",
        controller: "BookingController"
      })
      .when('/add_package', {
        templateUrl: "assets/templates/packages/add_package1.html",
        controller: "PackageController"
      })
      .when('/add_addons', {
        templateUrl: "assets/templates/packages/add_addons.html",
        controller: "AddonController"
      })
      .when('/add_bonus', {
        templateUrl: "assets/templates/packages/add_bonus.html",
        controller: "BonusController"
      })
      .when('/add_package2', {
        templateUrl: "assets/templates/packages/add_package2.html",
        controller: "PackageController"
      })
      .when('/add_package3', {
        templateUrl: "assets/templates/packages/add_package3.html",
        controller: "PackageController"
      })
      .when('/messages', {
        templateUrl: "assets/templates/messages/messages.html",
        controller: "MessagesController"
      })
      .when('/activate', {
        templateUrl: "assets/templates/authentication/activate.html",
        controller: "ActivateController"
      })
      .when('/forgotPassword', {
        templateUrl: "assets/templates/authentication/forgotPassword.html",
        controller: "ForgotPasswordController"
      })
      .when('/resetPassword', {
        templateUrl: "assets/templates/authentication/resetPassword.html",
        controller: "ResetPasswordController"
      })
      .when('/sendResetMail', {
        templateUrl: "assets/templates/authentication/sendResetMail.html",
        controller: "SendResetPasswordMail"
      })
      .when('/admin', {
        templateUrl: "assets/templates/admin/index.html",
        controller: "AdminController"
      })
      .when('/commission', {
        templateUrl: "assets/templates/admin/commission.html",
        controller: "CommissionController"
      })
      .when('/add_commission', {
        templateUrl: "assets/templates/admin/add_commission.html",
        controller: "CommissionController"
      })
      .when('/user/:id', {
        templateUrl: "assets/templates/admin/user_profile.html",
        controller: "UserShowProfileController"
      })
      .when('/wallet', {
        templateUrl: "assets/templates/admin/wallet.html",
        controller: "WalletController"
      })
      .when('/add_user_badge', {
        templateUrl: "assets/templates/admin/add_user_badge.html",
        controller: "BadgeController"
      })
      .when('/admin_packages', {
        templateUrl: "assets/templates/admin/admin_packages.html",
        controller: "PackageController"
      })
      .when('/add_notification', {
        templateUrl: "assets/templates/admin/add_notification.html",
        controller: "NotificationController"
      })
      .when('/tags', {
        templateUrl: "assets/templates/admin/tags.html",
        controller: "TagController"
      })
      .when('/add_tag', {
        templateUrl: "assets/templates/admin/add_tag.html",
        controller: "TagController"
      })
      .when('/admin_packages/:id', {
        templateUrl: "assets/templates/admin/show_packages.html",
        controller: "PackageShowController"
      })
      .when('/category', {
        templateUrl: "assets/templates/admin/show_category.html",
        controller: "CategoryController"
      })
      .when('/badges', {
        templateUrl: "assets/templates/admin/badges.html",
        controller: "BadgeController"
      })
      .when('/add_badge', {
        templateUrl: "assets/templates/admin/add_badge.html",
        controller: "BadgeController"
      })
      .when('/add_category', {
        templateUrl: "assets/templates/admin/add_category.html",
        controller: "CategoryController"
      })
      .when('/inbox', {
        templateUrl: "assets/templates/messages/inbox.html",
        controller: "MessagesController"
      })
      .when('/sentMessages', {
        templateUrl: "assets/templates/messages/sentbox.html",
        controller: "MessagesController"
      })

    .when('/notes/new', {
      templateUrl: "assets/templates/notes/new.html",
      controller: "NotesCreateController"
    })

    .when('/notes/:id', {
      templateUrl: "assets/templates/notes/show.html",
      controller: "NotesShowController"
    })

    .when('/notes/:id/edit', {
      templateUrl: "assets/templates/notes/edit.html",
      controller: "NotesEditController"
    })

    .when('/users', {
      templateUrl: "assets/templates/users/index.html",
      controller: "UsersIndexController"
    })

    .when('/users/:id', {
      templateUrl: "assets/templates/users/show.html",
      controller: "UsersShowController"
    });

});