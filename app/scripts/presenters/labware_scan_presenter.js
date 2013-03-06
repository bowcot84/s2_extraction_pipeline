/*
 * S2 - An open source lab information management systems (LIMS)
 * Copyright (C) 2013  Wellcome Trust Sanger Insitute
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 1, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston MA  02110-1301 USA
 */


define([], function () {

  // interface ....
  var emptyPresenter = function (owner, presenterFactory) {
    this.owner = owner;
    this.currentView = {};
    return this;
  };

  emptyPresenter.prototype.setupPresenter = function (input_model, jquerySelection) {
    this.jquerySelection = jquerySelection;
    return this;
  };

  emptyPresenter.prototype.renderView = function () {
    // render view...
    this.jquerySelection().empty().append("<div>empty<div/>");
    return this;
  };


  emptyPresenter.prototype.release = function () {
    this.jquerySelection().release();
    return this;
  };


  return emptyPresenter;
});
