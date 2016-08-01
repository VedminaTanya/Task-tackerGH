/**
 * Created by Сестрички on 29.07.2016.
 */
var requestExample = {
    _id: "kgktkf4443fjfh",
    assigned_to_user_login: "test_user",
    name: "Create some front end",
    task_text: "Implement this",
    expiration_date: "1467994183",
    additional_files: [],
    urgency: "normal",
    task_status: "assigned"
};


function createTask(obj) {
    var maskOfTask = $('<article/>', {
        id: obj._id,
        class: 'col-xs-12 col-sm-6 col-md-4 expanding-content-container'
    }).append(
        $('<div/>', {
            class: 'panel panel-default'
        }).append(
            $('<header/>', {
                class: 'panel-heading'
            }).append(
                $('<h4/>', {
                    text: obj.name
                }).append(
                    $('<span/>', {
                        class: 'label label-default label-as-badge pull-right',
                        'data-toggle':  'popover',
                        text: obj.task_status
                    })
                )
            ),
            $('<div/>', {
                class: 'panel-body'
            }).append(
                $('<p/>', {
                    id: 'text' + obj._id,
                    class: 'expanding-text',
                    text: obj.task_text
                }),
                $('<a/>', {
                    id:'seeMore' + obj._id,
                    class: 'seeMore-active',
                    href: '#text' + obj._id,
                    text: 'see more...',
                    click: function() {
                        $('#seeMore' + obj._id).removeClass('seeMore-active').addClass('seeMore'),
                        $('#rollUp'+ obj._id).removeClass('rollUp').addClass('rollUp-active')
                    }
                }),
                $('<a/>', {
                    id:'rollUp'+ obj._id,
                    class: 'rollUp',
                    href: '#',
                    text: 'roll up...',
                    click: function() {
                        $('#rollUp'+ obj._id).removeClass('rollUp-active').addClass('rollUp'),
                        $('#seeMore' + obj._id).removeClass('seeMore').addClass('seeMore-active')
                    }
                })
            ),

            $('<footer/>', {
                class: 'panel-footer'
            }).append(
                $('<div/>', {
                    class: 'btn-group btn-group-justified'
                }).append(
                    $('<div/>', {
                        class: 'btn-group',
                        role: 'group'
                    }).append(
                        $('<button/>', {
                            class: 'btn btn-success',
                            text: 'Finish'
                        }).append(
                            $('<i/>', {
                                class: 'glyphicon glyphicon-ok'
                            })
                        )
                    ),
                    $('<div/>', {
                        class: 'btn-group btn-group-justified'
                    }).append(
                        $('<div/>', {
                            class: 'btn-group',
                            role: 'group'
                        }).append(
                            $('<button/>', {
                                class: 'btn btn-danger',
                                text: 'Discard'
                            }).append(
                                $('<i/>', {
                                    class: 'glyphicon glyphicon glyphicon-remove'
                                })
                            )
                        )
                    )
                )
            )
        )
    )




    return maskOfTask;
}



$('.row').append(createTask(requestExample));
