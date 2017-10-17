var TableDatatablesScroller = function() {
    var e = function() {
            var e = $("#sample_1");
            e.dataTable({
                language: {
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    },
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "No entries found",
                    infoFiltered: "(filtered1 from _MAX_ total entries)",
                    lengthMenu: "_MENU_ entries",
                    search: "Search:",
                    zeroRecords: "No matching records found"
                },
                buttons: [{
                    extend: "print",
                    className: "btn dark btn-outline"
                }, {
                    extend: "pdf",
                    className: "btn green btn-outline"
                }, {
                    extend: "csv",
                    className: "btn purple btn-outline "
                }],
                scrollY: 300,
                deferRender: !0,
                scroller: !0,
                stateSave: !0,
                order: [
                    [0, "asc"]
                ],
                lengthMenu: [
                    [10, 15, 20, -1],
                    [10, 15, 20, "All"]
                ],
                pageLength: 10,
               dom: "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>"
            })
        },
        t = function() {
            var e = $("#sample_2");
            e.dataTable({
                language: {
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    },
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "No entries found",
                    infoFiltered: "(filtered from _MAX_ total entries)",
                    lengthMenu: "_MENU_ entries",
                    search: "Search:",
                    zeroRecords: "Loading..."
                },
                buttons: [{
                    extend: "print",
                    className: "btn default"
                }, {
                    extend: "pdf",
                    className: "btn default"
                }, {
                    extend: "csv",
                    className: "btn default"
                }],
                serverSide: !0,
                ordering: !1,
                searching: !1,
                ajax: function(e, t, n) {
                    for (var o = [], a = e.start, l = e.start + e.length; l > a; a++) o.push([a + "-1", a + "-2", a + "-3", a + "-4", a + "-5"]);
                    setTimeout(function() {
                        t({
                            draw: e.draw,
                            data: o,
                            recordsTotal: 5e6,
                            recordsFiltered: 5e6
                        })
                    }, 50)
                },
                scrollY: 400,
                scroller: {
                    loadingIndicator: !0
                },
                dom: "<'row' <'col-md-12'B>><'table-scrollable't><'row'<'col-md-12'i>>"
            })
        },
        n = function() {
            var e = $("#sample_3");
            e.dataTable({
                language: {
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    },
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "No entries found",
                    infoFiltered: "(filtered1 from _MAX_ total entries)",
                    lengthMenu: "_MENU_ entries",
                    search: "Search:",
                    zeroRecords: "No matching records found"
                },
                buttons: [{
                    extend: "print",
                    className: "btn dark btn-outline"
                }, {
                    extend: "pdf",
                    className: "btn green btn-outline"
                }, {
                    extend: "csv",
                    className: "btn purple btn-outline "
                }],
                scrollY: 300,
                deferRender: !0,
                scroller: !0,
                deferRender: !0,
                scrollX: !0,
                scrollCollapse: !0,
                stateSave: !0,
                order: [
                    [0, "asc"]
                ],
                lengthMenu: [
                    [10, 15, 20, -1],
                    [10, 15, 20, "All"]
                ],
                pageLength: 10,
                dom: "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>"
            })
        },
        o = function() {
            var e = $("#sample_4");
            e.dataTable({
                language: {
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    },
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "No entries found",
                    infoFiltered: "(filtered1 from _MAX_ total entries)",
                    lengthMenu: "_MENU_ entries",
                    search: "Search:",
                    zeroRecords: "No matching records found"
                },
                buttons: [{
                    extend: "print",
                    className: "btn dark btn-outline"
                }, {
                    extend: "pdf",
                    className: "btn green btn-outline"
                }, {
                    extend: "csv",
                    className: "btn purple btn-outline "
                }],
                scrollY: 300,
                deferRender: !0,
                scroller: !0,
                deferRender: !0,
                scrollX: !0,
                scrollCollapse: !0,
                order: [
                    [0, "asc"]
                ],
                lengthMenu: [
                    [10, 15, 20, -1],
                    [10, 15, 20, "All"]
                ],
                pageLength: 10,
                dom: "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>"
            })
        };
    return {
        init: function() {
            jQuery().dataTable && (e(), t(), n(), o())
        }
    }
}();
jQuery(document).ready(function() {
    TableDatatablesScroller.init()
});