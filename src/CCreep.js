// include all creep files
#include "CCreepBodyDefault.js"
#include "CCreepBuilder.js"
#include "CCreepCollector.js"
#include "CCreepHarvester.js"
#include "CCreepPionier.js"
#include "CCreepRepairer.js"
#include "CCreepUpgrader.js"

#include "CCreepXHarvester.js"
#include "CCreepXUpgrader.js"

#include "CCreepXGuard.js"
#include "CCreepXHealer.js"

// ########### GENERAL SECTION #########################################

Creep.prototype.run = function() {
    var body = this.memory.body;
    var role = this.memory.role;
    if (role === 'harvester')           this.runDefaultHarvester();
    else if (role === 'builder')        this.runBuilder();
    else if (role === 'collector')      this.runCollector();
    else if (role === 'pionier')        this.runPionier();
    else if (role === 'repairer')       this.runRepairer();
    else if (role === 'upgrader')       this.runDefaultUpgrader();
    
    else if (role === 'test')       this.runDefault();

    else if (body === BODY_HARVESTER)   this.runHarvester();
    else if (body === BODY_UPGRADER)    this.runUpgrader();
    else if (body === BODY_HEALER)      this.runHealer();
    else if (body === BODY_RANGER)      this.runRanger();
    else                                this.logError("has no role");
}

// ########### MOVE SECTION ###########################################

Creep.prototype.movePredefined = function(targetPos, opts, onPos) {
    if (!this.pos.inRangeTo(targetPos, 1) || onPos) {
        if (!opts) opts = {};
        opts.reusePath = 0;
        this.moveTo(targetPos, opts); 
    }
}

Creep.prototype.getBodyType = function() {
    return this.body;
}

Creep.prototype.moveAround = function() {
    this.move(Game.time % 8 + 1);
} 

Creep.prototype.moveRandom = function() {
    this.move(Math.floor(Math.random() * 8) % 8 + 1);
} 

// ########### OTHER SECTION ############################################
Creep.prototype.logCompact = function(message) {
    logCompact('[' + this.room.name + '] ' + '[' + this.name + '] ' + message);
}
Creep.prototype.logDetail = function(message) {
    logDetail('[' + this.room.name + '] ' + '[' + this.name + '] ' + message);
}
Creep.prototype.logError = function(message) {
    logError('[' + this.room.name + '] ' + '[' + this.name + '] ' + message);
}