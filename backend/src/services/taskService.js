const prisma = require('../config/db');

exports.createTaskService = async (data) => {
  return prisma.task.create({
    data
  });
};

exports.getTasksService = async (userId) => {
  return prisma.task.findMany({
    where: { userId }
  });
};

exports.updateTaskService = async (id, data) => {
  return prisma.task.update({
    where: {
      id: Number(id)
    },
    data
  });
};

exports.deleteTaskService = async (id) => {
  return prisma.task.delete({
    where: {
      id: Number(id)
    }
  });
};
